<?php

namespace App\Repositories\Products;

use App\Models\Product;
use Illuminate\Support\Facades\Validator;

class ProductsReposityEloquent implements ProductsReposityInterface
{

    protected $model;

    public function validate(array $values)
    {
        $validate = [
            'nome' => 'required|string|max:150',
            'valor' => 'required|integer',
        ];
        $error = [
            'nome' => 'Nome e Obrigatorio e nao pode passar de 150',
            'valor' => 'valor e um campo obrigatorio',
        ];
        $rules = Validator::make($values, $validate, $error);

        if ($rules->fails()) {
            return $rules->errors();
        } else {
            return true;
        }
    }


    public function __construct(Product $model)
    {
        $this->model = $model;
    }

    public function all()
    {
        return response()->json($this->model->all(), 200);
    }

    public function store(array $value)
    {
        $post = $this->validate($value);
        if ($post) {
            return $this->model->create($post);
        } else {
            return $post;
        }
    }

    public function update(array $value, $product)
    {
        $post = $this->validate($value);
        if ($post) {
            $x = $this->model->find($value['id']);
            $x->update($value);
            return $x;
        } else {
            return $post;
        }
    }
}
