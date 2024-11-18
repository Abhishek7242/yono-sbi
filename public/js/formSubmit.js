document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();

    let title = document.getElementById('title').value;
    let money = document.getElementById('money').value;
    let balance = document.getElementById('balance').value;
    let date = document.getElementById('date').value;

    fetch('http://127.0.0.1:8000/api/addtransaction', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: title,
            money: money,
            balance: balance,
            date: date
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);

                    formSection.classList.add('hide')
                    setTimeout(() => {
                        formSection.classList.remove('hide')
                        formSection.classList.remove('show')

                    }, 1100);
             
            // Handle success - perhaps show a message or redirect
        })
        .catch((error) => {
            console.error('Error:', error);
            // Handle error - show error message
        });
});