@extends('layouts/main')
@section('main-section')
 
<div class="container" style="margin-top: 50px">

    <table class="table">
  <thead>
    <tr>
      <th scope="col" class="border border-2 bg-danger">Sno</th>
      <th scope="col" class="border border-2 bg-primary">Title</th>
      <th scope="col" class="border border-2 bg-primary">Money</th>
      <th scope="col" class="border border-2 bg-success">Balance</th>
      <th scope="col" class="border border-2 bg-primary">Date</th>

    </tr>
  </thead>
  <tbody>
    @php
        $no=1
    @endphp
    @foreach ($transactions as $transaction)
        
    <tr>
      <th scope="row" class="border border-2">{{$no}}</th>
      <td  class="border border-2">{{ $transaction->title}}</td>
      <td class="border border-2 {{ $transaction->money < 0 ? 'text-danger' : 'text-success' }} fw-bold"">{{ $transaction->money}}</td>
      <td class="border border-2">{{$transaction->balance}}</td>
      <td class="border border-2">{{ $transaction->date}}</td>
    
            {{-- <td> --}}
      {{-- <a href="{{ route('transaction.delete', ['id' => $transaction->transaction_id]) }}" class="btn btn-sm btn-danger">Move to trash</a> --}}

            {{-- </td> --}}
      </tr>
      @php
          $no++
      @endphp
    @endforeach
 
  </tbody>
</table>
<div class="container my-5">
<div class="row">

  {{ $transactions->links() }}
</div>

</div>
</div>
@endsection