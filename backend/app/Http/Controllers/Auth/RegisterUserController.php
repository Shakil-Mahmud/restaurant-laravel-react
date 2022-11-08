<?php

namespace App\Http\Controllers\Auth;

use Exception;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class RegisterUserController extends Controller
{
    public function index(){
        return "working..";
    }

    public function register(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'name' => 'required|string',
                'email' => 'required|string|unique:users,email',
                'password' => 'required|min:6|string|confirmed',
            ], [
                'name.required' => 'Invalid input',
                'name.string' => 'Invalid input',
                'email.required' => 'Invalid input',
                'email.unique' => 'This email already exist',
                'email.string' => 'Invalid input',
                'password.required' => 'Invalid input',
                'password.min' => 'password must contain minimum 6 characters',
                'password.string' => 'Invalid input',
                'password.confirmed' => "password doesn't match",
            ]);
            if ($validator->fails()) {
                throw new Exception($validator->errors(), 1);
            }
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'type' => 'validation error',
                'data' => $e->getMessage()
            ], Response::HTTP_BAD_REQUEST);
        }

        try {
            $user = User::create([
                'name' => $request['name'],
                'email' => $request['email'],
                'password' => bcrypt($request['password'])
            ]);
            if (!$user) {
                throw new Exception($user->errors(), 2);
            }

            $response = [
                'user' => $user,
            ];
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ]);
        }
        return response($response, Response::HTTP_CREATED);
    }
}
