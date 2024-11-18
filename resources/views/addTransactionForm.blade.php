

<section id="formSection" class="d-flex justify-content-center align-items-center">
    <div id="formContainer" class="p-5 d-flex justify-content-center align-items-center">
        
        <form  >
            @csrf
            <h2>New Transaction</h2>
            <div>
                <input required type="text" autocomplete="title" name="title" id="title">
                <span>Title</span>
                <i></i>
            </div>
            <div>
                <input required type="text" name="money" id="money">
                <span>Money</span>
                <i></i>
<button id="add-to-current-balance" class="btn btn-sm bg-success text-white">Add</button>
{{-- <button id="reset-btn" class="btn btn-sm bg-danger text-white">reset</button> --}}
            </div>
            <div>
                <input required type="number" name="balance" id="balance">
                <span>Balance</span>
                <i></i>

            </div>
            <div>
                <input required type="date" name="date" id="date">
                <span>Date</span>
                <i></i>

            </div>
            <div>
                <button class="btn btn-success" id="submit">Add Transaction</button>
            </div>
        </form>
    </div>
</section>

