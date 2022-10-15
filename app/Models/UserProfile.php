<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserProfile extends Model
{
    use HasFactory;

    protected $fillable
        = [
            'user_id',
            'first_name',
            'last_name',
            'phone',
            'gender',
            'birthdate',
        ];

    protected $casts = [
        'birthdate' => 'date'
    ];

    public function user ()
    {
        return $this->belongsTo(User::class);
    }

    public function fullName ()
    {
        return Attribute::make(
            get: fn($attribute) => $attribute['first_name'] . ' '. $attribute['last_name']
        );
    }


}
