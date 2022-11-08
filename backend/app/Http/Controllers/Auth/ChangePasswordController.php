<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class ChangePasswordController extends Controller
{
    public function updatePassword(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'currentPassword' => 'required|min:6',
                'newPassword' => 'required|min:6|confirmed',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'type' => 'validation error',
                    'data' => $validator->errors(),
                ], Response::HTTP_BAD_REQUEST);
            }
            $user = User::where('id', Auth::id())->first();
            if (!Hash::check($request['currentPassword'], $user->password)) {
                return response()->json([
                    'success' => false,
                    'type' => 'password unmatched',
                    'data' => '',
                    'message' => "wrong password",
                ], Response::HTTP_BAD_REQUEST);
            }
            $user->password = bcrypt($request['newPassword']);
            $user->save();
            // logout user after update the password
            auth()->user()->tokens()->delete();
            return response()->json([
                'success' => true,
                'type' => 'password update',
                'data' => $request->get('newPassword'),
                'message' => "password update successfully",
            ], Response::HTTP_OK);
        } catch (\Exception $e) {
            //throw $e;
        };
    }
}
