<?php
namespace App\Providers;

use App\Repositories\Products\ProductsReposityInterface;
use App\Repositories\Products\ProductsReposityEloquent;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->singleton(ProductsReposityInterface::class,ProductsReposityEloquent::class);

    }

}