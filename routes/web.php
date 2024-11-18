<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TransactionController;
use App\Models\Transactions;

Route::get('/', function () {
    return view('landingPage');
});
Route::get('/viewtransaction', [TransactionController::class, 'index']);
