<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\DocumentController;

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


Route::post('/register',[AuthController::class,'register']);

Route::get('/token', function (Request $request){
$token = $request->session()->token();
$token = csrf_token();
return $token;
});

//Protected routes-Only authenticated users can have access to protected routes//
Route::group(['middleware' => ['header']], function () {    //'auth:sanctum',
    Route::resource('documents', DocumentController::class);

    Route::resource('patients', PatientController::class);

    Route::resource('doctors', DoctorController::class);


});




Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
