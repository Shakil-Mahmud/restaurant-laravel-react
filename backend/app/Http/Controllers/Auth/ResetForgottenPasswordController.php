<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class ResetForgottenPasswordController extends Controller
{
    public function resetPassword(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'email' => 'required',
                'password' => 'required|confirmed|min:6'
            ],
            [
                'password.required' => 'Invalid input',
                'password.min' => 'password must contain minimum 6 characters',
                'password.confirmed' => "password doesn't match",
            ]
        );
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors(),
            ], Response::HTTP_BAD_REQUEST);
        }

        $user = User::where('email', $request['email'])->first();
        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'Bad credentials'
            ], Response::HTTP_BAD_REQUEST);
        }
        $user->password = bcrypt($request['password']);
        $user->save();
        return response()->json([
            'success' => true,
            "message" => "password updated successfully",
        ], Response::HTTP_OK);
    }
}
