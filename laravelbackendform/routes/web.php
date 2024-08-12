<?php

// use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Route;
//  use App\Http\Controllers\UserformController;

Route::get('/', function () {
    return view('welcome');
});
    
use App\Http\Controllers\UserformController;

Route::post('/formsubmit', [UserformController::class, 'storedata']);