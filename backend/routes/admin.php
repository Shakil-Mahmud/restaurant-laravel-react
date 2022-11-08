<?php

use App\Http\Controllers\Admin\AdminForgetPasswordController;
use App\Http\Controllers\Admin\AdminLoginController;
use App\Http\Controllers\Admin\AdminOtpController;
use App\Http\Controllers\Admin\AdminPasswordUpdateController;
use App\Http\Controllers\Admin\AdminRegisterController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest:admin')->group(function () {
    Route::post('/register', [AdminRegisterController::class, 'register'])
    ->name('admin.register');

    Route::post('/login', [AdminLoginController::class, 'login'])
    ->name('admin.login');

    Route::post('/otp/send', [AdminOtpController::class, 'otpSend'])
    ->name('admin.otp.send');

    Route::post('/otp/check', [AdminOtpController::class, 'otpCheck'])
    ->name('admin.otp.check');

    Route::post('/reset/password', [AdminForgetPasswordController::class, 'resetPassword'])
    ->name('admin.password.reset');
});

// protected routes
Route::group(['middleware' => ['auth:sanctum', 'ability:admin'] ], function () {
    Route::get('/test', [AdminRegisterController::class, 'index'])->name('admin.test');
    Route::post('/logout', [AdminLoginController::class, 'logout'])
        ->name('admin.logout');
    Route::post('/update/password', [AdminPasswordUpdateController::class, 'updatePassword'])
    ->name('admin.password.update');
});
