<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Transactions;
class AddTransactionsController extends Controller
{
    //
    public function index()
    {
        // Get the last transaction based on the `id`
        $lastTransaction = Transactions::orderBy('id', 'desc')->first();

        // Pass the last transaction data to the view
        return $lastTransaction->balance;
        // return view('addTransactionForm')->with('lastTransaction', $lastTransaction);
    }
    public function addNew(Request $request)
    {
        // Validate the incoming request data
        // $validatedData = $request->validate([
        //     'title' => 'required',
        //     'money' => 'required',
        //     'balance' => 'required',
        //     'date' => 'required',
        // ]);

        // Create a new transaction using the validated data
        // $transaction = new Transactions;
        // $transaction->title = $validatedData['title'];
        // $transaction->money = $validatedData['money'];
        // $transaction->balance = $validatedData['balance'];
        // $transaction->date = $validatedData['date'];
        $transaction = new Transactions;
        $transaction->title = $request->title;
        $transaction->money = $request->money;
        $transaction->balance = $request->balance;
        $transaction->date = $request->date;

        // Save the transaction to the database
        $transaction->save();

        return response()->json([
            'success' => true,
            'message' => 'Client added successfully',
        ], 201); // 201 Created 
    }
}
