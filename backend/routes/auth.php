<?php

use App\Http\Controllers\Auth\AuthenticatedTokenController;
use App\Http\Controllers\Auth\ChangePasswordController;
use App\Http\Controllers\Auth\OtpController;
use App\Http\Controllers\Auth\RegisterUserController;
use App\Http\Controllers\Auth\ResetForgottenPasswordController;
use App\Http\Controllers\AuthController;
use GuzzleHttp\Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// public routes
Route::middleware('guest')->group(function () {
    Route::post('/register', [RegisterUserController::class, 'register'])
        ->name('register');

    Route::post('/login', [AuthenticatedTokenController::class, 'login'])
        ->name('login');

    Route::post('/otp/send', [OtpController::class, 'otpSend'])
        ->name('otp.send');

    Route::post('/otp/check', [OtpController::class, 'otpCheck'])
        ->name('otp.check');

    Route::post('/reset/password', [ResetForgottenPasswordController::class, 'resetPassword'])
        ->name('password.reset');
});

// protected routes
Route::group(['middleware' => ['auth:sanctum', 'ability:customer'] ], function(){
    Route::post('/logout', [AuthenticatedTokenController::class, 'logout'])
        ->name('logout');
    Route::post('/update/password', [ChangePasswordController::class, 'updatePassword'])
        ->name('password.update');
        Route::get('/test', [RegisterUserController::class, 'index']);
});

