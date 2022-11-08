<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class OrderController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }
    public function validateData($data)
    {
        // dd($data['date']);
        $validate = Validator::make($data->all(), [
            'customer_id' => 'required',
             'order_date_time' => 'required|date_format:Y-m-d H:i:s' ,
            'status' => 'required|in:requested,paid,delivered',
            ]);

        return $validate;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $orders = Order::all();
            if(!$orders){
                throw new Exception("Error Processing Request", 2);
            }
            return response()->json([
                "success" => true,
                "data" => $orders,
                "message" => "success",
            ], Response::HTTP_OK);
        } catch (\Exception $e) {
            return response()->json([
                "success" => false,
                "message" => $e->getMessage(),
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
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
        // dd($request);
        try {
            $validate = $this->validateData($request);
            if($validate->fails()){
                throw new Exception($validate->errors(), 1);
            }
            // Check Is user exist in database
            $order = Order::create([
                'customer_id' => $request['customer_id'],
                'order_date_time' => $request['order_date_time'],
                'status' => $request['status'],
            ]);
            if (!$order) {
                return response()->json([
                    'success' => false,
                    'message' => "Order creation failed",
                ], Response::HTTP_INTERNAL_SERVER_ERROR);
            }
            return response()->json([
                'success' => true,
                'data' => $order,
                'message' => "Order successfully created"
            ], Response::HTTP_CREATED);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $order = Order::find($id);
        return $order;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order)
    {
        //
    }
}
