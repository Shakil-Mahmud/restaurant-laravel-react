<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $fillable = ['customer_id', 'order_date_time', 'status'];

    public function users(){
        return $this->belongsTo(User::class);
    }

    public function items(){
        return $this->belongsToMany(Item::class);
    }
}
