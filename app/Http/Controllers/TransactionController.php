<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Transactions;

class TransactionController extends Controller
{
    //
    public function index()
    {
        // Get the last transaction based on the `id`
        $transactions = Transactions::orderBy('id', 'desc')->paginate(15);
        $data = compact('transactions');
        return view('viewTransaction')->with($data);
    }
}
