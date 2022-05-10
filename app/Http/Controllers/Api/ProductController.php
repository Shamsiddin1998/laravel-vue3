<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Http\Resources\Api\Product\ProductResource;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::orderby('id', 'desc')->get();

        return ProductResource::collection($products);
        // return response()->json($products);
    }

    public function store(Request $request)
    {

        $product = Product::create($request->all());

        return response()->json([
            'status' => 'success',
            'product'   => $product
        ]);
    }

    public function show($id)
    {
        $product = Product::find($id);

        // return response()->json($product);
        return new ProductResource($product);
    }

    public function update(Request $request, $id)
    {
        $product = Product::find($id);
        $product->update($request->all());

        return response()->json([
            'status' => 'success',
            'post'   => $product
        ]);
    }

    public function destroy($id)
     {
         $product = Product::find($id);
         $product->delete();

         return response()->json('Product successfully deleted!');
     }
}
