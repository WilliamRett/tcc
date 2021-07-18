<?php
namespace App\Repositories\Products;

interface ProductsReposityInterface {

    public function all();
    public function store(array $value);
    public function update(array $value,$product);

}