<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class userform extends Model
{
    use HasFactory;

    protected $fillable=[
       'name',"email","phone_number","country",
       "job","course_enroll_date","course"
    ];

}
