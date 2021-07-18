<?php 
namespace App\Service\Products\Interfaces;


interface ProductServiceInterface{

    public function all();
    public function store(array $date);
    public function update(array $date,$product);

}




