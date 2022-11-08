<?php

namespace App\Http\Controllers\Admin;

use App\Models\Otps;
use App\Models\Admin;
use App\Mail\OtpCodeSend;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class AdminOtpController extends Controller
{
    public function otpSend(Request $request)
    {
        // generate otp using cryptographic algorithm
        // delete expired+used otps from db
        // design mail body

        // validate input email
        $validator = Validator::make($request->all(), [
            'email' => 'required|string'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => "Invalid input",
            ]);
        }

        // check email exist in db
        $admin = Admin::where('email', $request['email'])->first();
        if (!$admin) {
            return response()->json([
                'success' => false,
                'type' => "email doesn't exist",
                'message' => "Invalid input",
            ]);
        }

        $otp = rand(1000, 9999);
        $otpEmail = Otps::where('email', $request['email'])->first();
        if ($otpEmail) {  // if old otp exists, update it.
            // dd();
            $otpEmail['email'] = $request['email'];
            $otpEmail['token'] = $otp;
            $otpEmail->save();
        } else {
            $saveOtp = Otps::create([  // create new otp
                'email' => $request['email'],
                'token' => $otp,
                'otpinserttime' => date('Y-m-d H:i:s'),
            ]);
        }
        $sendEmail = Mail::to(request('email'))->send(new OtpCodeSend($otp));

        if (!$sendEmail) {
            return response()->json([
                'success' => false,
                'message' => 'unable to send email',
            ]);
        }
        // return $saveOtp;
        return response()->json([
            'success' => true,
            'message' => "Otp has send to your email."
        ]);
    }

    public function otpCheck(Request $request)
    {
        //validate email
        $validator = Validator::make($request->all(), [
            'email' => 'required',
            'otp' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => "wrong otp",
            ], Response::HTTP_BAD_REQUEST);
        }
        // check email exist in db
        $checkEmail = Otps::where('email', $request['email'])->first();
        if (!$checkEmail) {
            return response()->json([
                'success' => false,
                'message' => 'Bad credentials'
            ], Response::HTTP_UNAUTHORIZED);
        }
        //check, is otp  outdated; otp valid until 30min/1800 sec
        $timeDIffInSecond = now()->diffInSeconds($checkEmail->updated_at);
        if ($timeDIffInSecond > 1800) {
            $checkEmail->valid = false;
            $checkEmail->save();
            return response()->json([
                'success' => false,
                'message' => 'expired token'
            ], Response::HTTP_UNAUTHORIZED);
        }
        // check, does otp matched or not
        if ($request['otp'] != $checkEmail->token) {
            return response()->json([
                'success' => false,
                'message' => "otp doesn't match",
                'db_otp' => $checkEmail->otp,
                'user_otp' => $request['otp'],
                'q' => $checkEmail,
            ], Response:: HTTP_UNAUTHORIZED);
        }
        $checkEmail->valid = false;
        $checkEmail->save();
        return response()->json([
            "success" => true,
            "message" => "otp matched",
        ], Response::HTTP_ACCEPTED);
    }
}
