<?php

namespace App\Http\Controllers;

use App\Models\userform;
use Illuminate\Http\Request;

class UserformController extends Controller
{
    // userform controller write here
    public function index() {
        return userform::all();   
    }
}
