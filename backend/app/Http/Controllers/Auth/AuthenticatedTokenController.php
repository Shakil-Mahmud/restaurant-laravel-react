<?php

namespace App\Http\Controllers\Auth;

use Exception;
use App\Models\User;
use Illuminate\Http\Request;
use GuzzleHttp\Psr7\Response;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response as HttpFoundationResponse;

class AuthenticatedTokenController extends Controller
{
    public function login(Request $request)
    {
        $fields = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string|min:6'
        ]);

        try {
            $user = User::where('email', $fields['email'])->first();
            if (!$user || !Hash::check($fields['password'], $user->password)) {
                throw new Exception('Bad credentials', 2);
            }
        } catch (\Exception $e) {
            return response([
                'message' => $e->getMessage()
            ], HttpFoundationResponse::HTTP_UNAUTHORIZED);
        }
        // Check email
        $user = User::where('email', $fields['email'])->first();

        // Check password
        if (!$user || !Hash::check($fields['password'], $user->password)) {
            return response([
                'type' => 'Bad credentials',
                'message' => 'Bad credentials'
            ], HttpFoundationResponse::HTTP_UNAUTHORIZED);
        }
        // send cookie instead of plainTextToken
        $token = $user->createToken('userToken', ['customer'])->plainTextToken;
        // $cookie = cookie('userJwtToken', $token, 60 * 24);
        $response = [
            'user' => $user,
            'token' => $token
        ];
        return response($response, HttpFoundationResponse::HTTP_ACCEPTED);
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();

        return response()->json([
            'success' => true,
            'message' => 'Logged out',
        ], HttpFoundationResponse::HTTP_OK) ;
    }
}
