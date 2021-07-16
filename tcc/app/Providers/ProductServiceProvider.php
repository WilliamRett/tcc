<?php

namespace App\Providers;

use App\Service\Products\Interfaces\ProductServiceInterface;
use App\Service\Products\ProductService;
use Illuminate\Support\ServiceProvider;

class ProductServiceProvider extends ServiceProvider
{
  
    public function register()
    {
        $this->app->bind(
            ProductServiceInterface::class,
            ProductService::class
        );

    }

    public function provides()
    {
        return [
            ProductServiceInterface::class
        ];
    }
}