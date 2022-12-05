<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Item;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class ItemController extends Controller
{
    public function validateData($data)
    {
        $validate = Validator::make($data->all(), [
            'name' => 'required|string|max:50',
            'price' => 'required|numeric',
            'available' => 'required|boolean',
            'category_id' => 'required',
        ]);

        return $validate;
    }
    /**
     * Display a listing of the resource.
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $items = Item::all();
            if (!$items) {
                throw new Exception("Error Processing Request", 2);
            }
            return response()->json([
                'success' => true,
                'data' => $items,
                'message' => "success",
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function store(Request $request)
    {
        try {
            $validate = $this->validateData($request);
            if($validate->fails()){
                throw new Exception($validate->errors(), 1);
            }
            $item = Item::create([
                'name' => $request['name'],
                'price' => $request['price'],
                'available' => $request['available'],
                'category_id' => $request['category_id'],
            ]);
            if(!$item){
                throw new Exception($item->errors(), 2);
            }
            return response()->json([
                'success'=> true,
                'data' => $item,
                'message' => "Item successfully created"
            ], Response::HTTP_CREATED);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ],Response::HTTP_BAD_REQUEST);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $item = Item::find($id);
            if (!$item) {
                throw new Exception("Error Processing Request", 2);
            }
            return response()->json([
                'success' => true,
                'data' => $item,
                'message' => "success",
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function edit(Item $item)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // return $request['name'];
        try {
            // data validate
            $validate = $this->validateData($request);
            if ($validate->fails()) {
                throw new Exception($validate->errors(), 1);
            }
            // check if data exists in db
            $item = Item::where('id',$id)->first();
            if(!$item){
                throw new Exception("Item update failed", 2);
            }
            //update
            $item->name = $request['name'];
            $item->price = $request['price'];
            $item->available = $request['available'];
            $item->save();

            return response()->json([
                'success' => true,
                'data' => $item,
                'message' => "Item updated successfully",
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], Response::HTTP_BAD_REQUEST);
        }
        //handle if not exist
        return $item;
    }
    public function statusUpdate(Request $request){
        // dd($request->get('id'));
        try {
            $item = Item::find($request->get('id'));
            if(!$item)
                throw new Exception("Item does not exits", 2);

            if($item->available == 0)
                $item->available = 1;
            else
                $item->available = 0;
            $item->save();

            return response()->json([
                "success" => true,
                "data" => $item,
                "message" => "items status updated successfully",
            ], Response::HTTP_OK);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], Response::HTTP_BAD_REQUEST);
    }
}
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $item = Item::find($id);
            if(!$item){
                throw new Exception("Item does not exists", 2);
            }
            $item->delete();
            return response()->json([
                'success' => true,
                'message' => "item deleted successfully",
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ]);
        }
    }
}
