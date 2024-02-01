<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;
use App\Http\Resources\ProductResource;

class ProductsController extends Controller
{
    const PAGE_SIZE = 15;
    
    /**
     * Display a listing of the resource.
     */
    public function index($searchTerm = '')
    {
        $products = null;
        if ($searchTerm) {
            $products = Products::where(function($query) use ($searchTerm) {
                $query->where('brand', 'like', '%' . $searchTerm . '%')
                      ->orWhere('name', 'like', '%' . $searchTerm . '%')
                      ->orWhere('description', 'like', '%' . $searchTerm . '%');
            })
            ->orderBy('id', 'desc')
            ->paginate(self::PAGE_SIZE);
        } else {
            $products = Products::orderBy('id', 'desc')->paginate(self::PAGE_SIZE);
        }
    
        return ProductResource::collection($products);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Products $products)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Products $products)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Products $products)
    {
        //
    }
}
