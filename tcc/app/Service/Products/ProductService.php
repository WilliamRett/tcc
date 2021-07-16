<?php

namespace App\Service\Products;

use App\Service\Products\Interfaces\ProductServiceInterface;
use App\Repositories\Products\ProductsReposityInterface;

class ProductService implements ProductServiceInterface
{

    protected $productRepo;

    public function __construct(ProductsReposityInterface $productRepo)
    {
        $this->productRepo = $productRepo;
    }


    public function all()
    {
        return $this->productRepo->all();
    }
}
