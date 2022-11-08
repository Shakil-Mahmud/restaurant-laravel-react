<?php

namespace App\Http\Controllers;

use DateTime;
use Exception;
use App\Models\Otps;
use App\Models\User;
use App\Mail\OtpCodeSend;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    //validation
    // custom error message
    // use regular expression
    // use try catch exception handling

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
            ], 400);
        }


    // use try catch for db update operation
        try{
            $user = User::create([
                'name' => $request['name'],
                'email' => $request['email'],
                'password' => bcrypt($request['password'])
            ]);
            // throw exception error
            if(!$user){
                throw new Exception($user->errors(), 2);
            }
            // send cookie instead of plainTextToken
            // $token = $user->createToken('userToken')->plainTextToken;

            $response = [
                'user' => $user,
                // 'token' => $token
            ];
        }
        catch(\Exception $e){

        }
        return response($response, 201);
    }

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
        } catch(\Exception $e) {
            return response([
                'message' => $e->getMessage()
            ], 401);
        }
        // Check email
        $user = User::where('email', $fields['email'])->first();

        // Check password
        if (!$user || !Hash::check($fields['password'], $user->password)) {
            return response([
                'type'=> 'Bad credentials',
                'message' => 'Bad credentials'
            ], 401);
        }
        // send cookie instead of plainTextToken
        $token = $user->createToken('userToken')->plainTextToken;
        // $cookie = cookie('userJwtToken', $token, 60 * 24);
        $response = [
            'user' => $user,
            'token' => $token
        ];
        return response($response, 200);
    }

    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();

        return [
            'message' => 'Logged out',
        ];
    }

    public function updatePassword(Request $request){
        try {
            $validator = Validator::make($request->all(), [
                'currentPassword' => 'required|min:6',
                'newPassword' => 'required|min:6|confirmed',
            ]);

            if($validator->fails()){
                return response()->json([
                    'success' => false,
                    'type' => 'validation error',
                    'data' => $validator->errors(),
                ], 400);
            }
            $user = User::where('id', Auth::id())->first();
            if (!Hash::check($request['currentPassword'], $user->password)) {
                return response()->json([
                    'success' => false,
                    'type' => 'password unmatched',
                    'data' => '',
                    'message' => "wrong password",
                ]) ;
            }
            $user->password = bcrypt($request['newPassword']);
            $user->save();
            auth()->user()->tokens()->delete();
            return response()->json([
                'success' => true,
                'type' => 'password update',
                'data' => $request->get('newPassword'),
                'message' => "password update successfully",
            ]);
        } catch (\Exception $e) {
            //throw $e;
        };
    }
    public function otpSend(Request $request){
        // generate otp using cryptographic algorithm
        // delete expired+used otps from db
        // design mail body

        // validate input email
        $validator = Validator::make($request->all(), [
            'email' => 'required|string'
        ]);
        if($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => "Invalid input",
            ]);
        }

        // check email exist in db
        $user = User::where('email', $request['email'])->first();
        if(!$user){
            return response()->json([
                'success' => false,
                'type' => "email doesn't exist",
                'message' => "Invalid input",
            ]);
        }

        $otp = rand(1000,9999);
        $otpEmail = Otps::where('email', $request['email'])->first();
        if($otpEmail){
            // dd();
            $otpEmail['email'] = $request['email'];
            $otpEmail['token'] = $otp;
            $otpEmail->save();
        }
        else {
            $saveOtp = Otps::create([
                'email' => $request['email'],
                'token' => $otp,
                'otpinserttime' => date('Y-m-d H:i:s'),
            ]);
        }
        $sendEmail = Mail::to(request('email'))->send(new OtpCodeSend($otp));

        if(!$sendEmail){
            return response()->json([
                'success' => false,
                'message' => 'unable to send email',
            ]);
        }
        // return $saveOtp;
    }

    public function otpCheck(Request $request){
        //validate email
        $validator = Validator::make($request->all(),[
            'email' => 'required',
            'otp' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => "wrong otp",
            ]);
        }
        // check email exist in db
        $checkEmail = Otps::where('email', $request['email'])->first();
        if(!$checkEmail){
            return response()->json([
                'success' => false,
                'message' => 'Bad credentials'
            ]);
        }
        //check, is otp  outdated; otp valid until 30min/1800 sec
        $timeDIffInSecond = now()->diffInSeconds($checkEmail->updated_at);
        if($timeDIffInSecond > 1800){
            $checkEmail->valid = false;
            $checkEmail->save();
            return response()->json([
                'success' => false,
                'message' => 'expired token'
            ]);
        }
        // check, does otp matched or not
        if($request['otp'] != $checkEmail->token){
            return response()->json([
                'success' => false,
                'message' => "otp doesn't match",
                'db_otp' => $checkEmail->otp,
                'user_otp' => $request['otp'],
                'q' => $checkEmail,
            ]);
        }
        $checkEmail->valid = false;
        $checkEmail->save();
        return response()->json([
            "success" => true,
            "message" => "otp matched",
        ]);
    }

    public function resetPassword(Request $request){
        $validator = Validator::make($request->all(),[
            'email' => 'required',
            'password' => 'required|confirmed|min:6'
        ],
        [
            'password.required' => 'Invalid input',
            'password.min' => 'password must contain minimum 6 characters',
            'password.confirmed' => "password doesn't match",
        ]);
        if($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => $validator->errors(),
            ]);
        }

        $user = User::where('email', $request['email'])->first();
        if(!$user){
            return response()->json([
                'success' => false,
                'message' => 'Bad credentials'
            ]);
        }
        $user->password = bcrypt($request['password']);
        $user->save();
        return response()->json([
            'success' => true,
            "message" => "password updated successfully",
        ]);
    }
}
