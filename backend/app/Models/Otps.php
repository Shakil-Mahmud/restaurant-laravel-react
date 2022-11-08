<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Otps extends Model
{
    use HasFactory;
    protected $fillable = ['email', 'token', 'otpinserttime', 'valid'];
    // protected $fillable = ['customer_id', 'order_date_time', 'status'];
}
