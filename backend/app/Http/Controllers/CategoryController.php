<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Category;
use App\Models\Item;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class CategoryController extends Controller
{
    public function index(){
        try {
            $categories = Category::all();
            if (!$categories) {
                throw new Exception("Error Processing Request", 2);
            }
            return response()->json([
                'success' => true,
                'data' => $categories,
                'message' => "Request processed successfully",
            ], Response::HTTP_OK);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], Response::HTTP_BAD_REQUEST);
        }
    }

    public function store(Request $request){
        $validate = Validator::make($request->all(),[
            'name' => 'required|string|max:50',
        ]);
        if ($validate->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validate->errors(),
            ], Response::HTTP_BAD_REQUEST);
        }
        $category = Category::create(['name'=>$request['name']]);
        if (!$category) {
            return response()->json([
                'success' => false,
                'message' => "Error creating new category",
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
        return response()->json([
            'success' => true,
            'data' => $category,
            'message' => "Request processed successfully",
        ], Response::HTTP_CREATED);

    }

    public function show($id){
        try {
            $category = Category::find($id);
            if (!$category) {
                throw new Exception("Couldn't find data", 2);
            }
            return response()->json([
                'success' => true,
                'data' => $category,
                'message' => "success",
            ], Response::HTTP_OK);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function update(Request $request, $id){
        $validate = Validator::make($request->all(), [
            'name' => 'required|string|max:50',
        ]);
        if ($validate->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validate->errors(),
            ], Response::HTTP_BAD_REQUEST);
        }
        $category = Category::find($id);
        if (!$category) {
            return response()->json([
                'success' => false,
                'message' => "Error creating new category",
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
        $category->name =  $request['name'];
        $category->save();
        return response()->json([
            'success' => true,
            'data' => $category,
            'message' => "Request processed successfully",
        ], Response::HTTP_CREATED);
    }

    public function destroy($id){
        try {
            $category = Category::find($id);
            if (!$category) {
                throw new Exception("category does not exists", 2);
            }
            $category->delete();
            return response()->json([
                'success' => true,
                'message' => "category deleted successfully",
            ], Response::HTTP_OK);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function showItemsByCategory($id){
        try {
            $category = Category::find($id);
            if(!$category){
                throw new Exception("Cannot find this category", 1);
            }
            $items = Item::where('category_id', $id)->get();
            if (!$category) {
                throw new Exception("No items found", 1);
            }
            return response()->json([
                'success' => true,
                'data' => $items,
                'message' => "success",
            ], Response::HTTP_OK);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
