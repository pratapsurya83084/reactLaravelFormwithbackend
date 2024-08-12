<?php
namespace App\Http\Controllers;

use App\Models\userform;
use Illuminate\Http\Request;
class UserformController extends Controller
{
    //get data from db
    public function index()
    {
        $data = userform::all(); // Retrieve all records from the Userform table
        return response()->json($data); // Return data as JSON
    }

          
    // store data fom into db
    public function storedata(Request $request)
    {
        $validatedData = $request->validate([
            'course' => 'required|string|max:255',
            'course_enroll_date' => 'required|date',
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'phone_number' => 'required|string|max:15',
            'country' => 'required|string|max:100',
            'job' => 'required|string|max:100',
        ]);

        $user = userform::create($validatedData);

        return response()->json(['message' => 'Data saved successfully!', 'user' => $user]);
    }
}


