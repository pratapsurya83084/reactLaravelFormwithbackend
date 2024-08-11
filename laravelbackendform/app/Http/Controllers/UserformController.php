<?php
namespace App\Http\Controllers;

use App\Models\userform;

class UserformController extends Controller
{
    public function index()
    {
        $data = userform::all(); // Retrieve all records from the Userform table
        return response()->json($data); // Return data as JSON
    }
}


