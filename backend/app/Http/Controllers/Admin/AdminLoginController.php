<?php

namespace App\Http\Controllers\Admin;

use Exception;
use App\Models\Admin;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class AdminLoginController extends Controller
{
    public function login(Request $request)
    {
        $fields = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string|min:6'
        ]);

        try {
            $admin = Admin::where('email', $fields['email'])->first();
            if (!$admin || !Hash::check($fields['password'], $admin->password)) {
                throw new Exception('Bad credentials', 2);
            }
        } catch (\Exception $e) {
            return response([
                'message' => $e->getMessage()
            ], Response::HTTP_UNAUTHORIZED);
        }

        // check
        if(Auth::guard('admin')->attempt([ 'email'=> $fields['email'], 'password' => $fields['password'] ])){
            $user = Auth::guard('admin')->user();
            $token = $user->createToken('adminToken', ['admin'])->plainTextToken;
            return response()->json([
                "success" => true,
                "data" => $user,
                "token" => $token,
                "message" => "guard is working...logged in..."
            ]);
        }

        // // Check email
        // $admin = Admin::where('email', $fields['email'])->first();
        // // Check password
        // if (!$admin || !Hash::check($fields['password'], $admin->password)) {
        //     return response([
        //         'type' => 'Bad credentials',
        //         'message' => 'Bad credentials'
        //     ], Response::HTTP_UNAUTHORIZED);
        // }
        // // send cookie instead of plainTextToken
        // $token = $admin->createToken('adminToken', ['admin'])->plainTextToken;
        // // $cookie = cookie('adminJwtToken', $token, 60 * 24);
        // $response = [
        //     'user' => $admin,
        //     'token' => $token
        // ];
        // return response($response, Response::HTTP_ACCEPTED);
    }

    public function logout()
    {
        // auth()->guard('admin')->user()->tokens()->delete();
        auth()->user()->tokens()->delete();

        return response()->json([
            'success' => true,
            'message' => 'Logged out',
        ], Response::HTTP_OK) ;
    }
}
