<?php
namespace App\Repositories\Products;
use App\Models\Product;


class ProductsReposityEloquent  {

    protected $model;

    public function __construct(Product $model)
    {
        $this->model = $model;
    }

    public function all(){
        return $this->model->get();
    }


}