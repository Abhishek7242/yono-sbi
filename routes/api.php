<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AddTransactionsController;

Route::get('/getcurrentbalance', [AddTransactionsController::class, 'index']);
Route::post('/addtransaction', [AddTransactionsController::class, 'addNew']);
// php artisan install:api