<?php

// use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\UserformController;

Route::get('/', function () {
    return view('resources/views/welcome.blade.php');
});
    
use App\Http\Controllers\UserformController;

Route::get('/userform', [UserformController::class, 'index']);
