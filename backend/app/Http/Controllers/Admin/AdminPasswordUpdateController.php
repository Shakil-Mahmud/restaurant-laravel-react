<?php

namespace App\Http\Controllers\Admin;

use App\Models\Admin;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class AdminPasswordUpdateController extends Controller
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
            $admin = Admin::where('id', Auth::id())->first();
            if (!Hash::check($request['currentPassword'], $admin->password)) {
                return response()->json([
                    'success' => false,
                    'type' => 'password unmatched',
                    'data' => '',
                    'message' => "wrong password",
                ], Response::HTTP_BAD_REQUEST);
            }
            $admin->password = bcrypt($request['newPassword']);
            $admin->save();
            // logout user after update the password
            auth()->guard('admin')->user()->tokens()->delete();
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

