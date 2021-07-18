<?php

namespace App\Service\Products;

use App\Service\Products\Interfaces\ProductServiceInterface;
use App\Repositories\Products\ProductsReposityInterface;

class ProductService implements ProductServiceInterface
{

    protected $productRepository;


    public function __construct(ProductsReposityInterface $productRepository)
    {
        $this->productRepository = $productRepository;
    }


    public function all()
    {
        return $this->productRepository->all();
    }

    public function store(array $value){
        return $this->productRepository->store($value);
    }

    public function update(array $value,$product){
        return $this->productRepository->update($value,$product);
    }


}
