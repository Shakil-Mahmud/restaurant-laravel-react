<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\OrderController;
use GuzzleHttp\Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::get('/', function () {
    return response()->json([
        'success' => true,
        'data' => "Hello World",
    ], 200);
});

//############ Admin Routes##############
Route::prefix('/admin')->group(__DIR__.'/admin.php');


//############ Items Routes ############
// public routes
Route::get('/items/all', [ItemController::class, 'index'])->name('item.all');
Route::get('/items/{id}', [ItemController::class, 'show'])->name('item.show');

// admin protected routes
Route::group([ 'middleware' => ['auth:sanctum', 'ability:admin'] ], function(){
    Route::post('/items/store', [ItemController::class, 'store'])->name('item.store');
    Route::post('/items/{id}', [ItemController::class, 'update'])->name('item.update');
    Route::delete('/items/{id}', [ItemController::class, 'destroy'])->name('item.destroy');
});

//############ Orders Routes ############
// Authenticated User Routes
Route::group([ 'middleware' => ['auth:sanctum', 'ability:admin,customer'] ], function(){
    Route::get('orders/all', [OrderController::class, 'index'])->name('order.all');
    Route::get('orders/{id}', [OrderController::class, 'show'])->name('order.show');
    Route::post('orders/store', [OrderController::class, 'store'])->name('order.store');
    Route::put('orders/{id}', [OrderController::class, 'update'])->name('order.update');
    Route::delete('order/{id}', [OrderController::class, 'destroy'])->name('order.destroy');
});

require __DIR__ . '/auth.php';





















// public routes
// Route::post('/register', [Auth::class, 'register']);
// Route::post('/login', [AuthController::class, 'login']);
// Route::post('/otp/send', [AuthController::class, 'otpSend']);
// Route::post('/otp/check', [AuthController::class, 'otpCheck']);
// Route::post('/reset/password', [AuthController::class, 'resetPassword']);

// Route::group(['middleware' => 'auth:sanctum'], function(){
//     Route::post('/logout', [AuthController::class, 'logout']);
//     Route::post('/update/password', [AuthController::class, 'updatePassword']);
// });



// protected routes
// Auth::routes(['verify' => true]);




// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
