<?php

namespace App\Http\Controllers\Admin;

use Exception;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class AdminRegisterController extends Controller
{
    public function index(){
        return "3333333333333333333admin working......";
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
            $admin = Admin::create([
                'name' => $request['name'],
                'email' => $request['email'],
                'password' => bcrypt($request['password'])
            ]);
            if (!$admin) {
                throw new Exception($admin->errors(), 2);
            }

            $response = [
                'user' => $admin,
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
