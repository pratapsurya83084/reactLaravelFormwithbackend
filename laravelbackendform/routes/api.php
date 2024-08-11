<?php

// use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserformController;

//public Route
// get from db
Route::get('/userform', [UserformController::class, 'index']);  
//if send data into db then below post use uncomment
// Route::post('/submit', [UserformController::class, 'submitForm']);