<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';
    protected $primaryKey = 'id';
    protected $fillable = [
        'nome',
        'valor',
    ];
    protected $casts = [
        'created_at' => 'datetime:d/m/Y',
        'updated_at' => 'datetime:d/m/Y'
    ];
    use HasFactory;
}
