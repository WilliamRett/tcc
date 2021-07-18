<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

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

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::group(['prefix' => 'products'], function () {
    Route::get('/',[ProductController::class, 'index']);
    Route::post('/store',[ProductController::class, 'store']);
    Route::patch('/{id}',[ProductController::class, 'update']);
    Route::delete('/{id}',[ProductController::class, 'delete']);
});