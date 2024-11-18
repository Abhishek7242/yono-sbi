let button = document.getElementById('newTransaction');
let formSection = document.getElementById('formSection');
let balance = document.getElementById('balance');
let date = document.getElementById('date');
let currentDate = new Date();

let year = currentDate.getFullYear();
let month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
let day = String(currentDate.getDate()).padStart(2, '0');

let formattedDate = `${year}-${month}-${day}`;
console.log(formattedDate);
// Add click event listener

formSection.addEventListener('click', function (e) {
    if (e.target == formSection) {

        formSection.classList.add('hide')
        setTimeout(() => {
            formSection.classList.remove('hide')
            formSection.classList.remove('show')

        }, 1100);
    }
})
button.addEventListener('click', function () {
    formSection.classList.add('show')

    // Fetch request
    date.value = formattedDate
    fetch('/api/getcurrentbalance')
        .then(response => response.json()) // assuming response is JSON
        .then(data => {
            console.log('Fetch successful:', data);
            balance.value = data
            // Handle data here, e.g., update UI
        })
        .catch(error => {
            console.error('Fetch error:', error);
            // Handle errors here
        });
});

let addBtn = document.getElementById('add-to-current-balance')
let resetBtn = document.getElementById('money')
resetBtn.addEventListener('input', (e) => {
    e.preventDefault()
    let balance = document.getElementById('balance')
  
        fetch('/api/getcurrentbalance')
            .then(response => response.json()) // assuming response is JSON
            .then(data => {
                console.log('Fetch successful:', data);
                balance.value = data
                // Handle data here, e.g., update UI
            })
            .catch(error => {
                console.error('Fetch error:', error);
                // Handle errors here
            });
})
addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let balance = document.getElementById('balance')
    let passValue = balance.value
    let moneyValue = money.value;
    if (moneyValue == '') {
        fetch('/api/getcurrentbalance')
            .then(response => response.json()) // assuming response is JSON
            .then(data => {
                console.log('Fetch successful:', data);
                balance.value = data
                // Handle data here, e.g., update UI
            })
            .catch(error => {
                console.error('Fetch error:', error);
                // Handle errors here
            });
    } else {

        if (moneyValue.includes('-')) {
            // Remove all hyphens from moneyValue
            let sanitizeValue = moneyValue.replace(/-/g, "");

            // Convert the sanitized value to a number
            let sanitizedNumber = parseFloat(sanitizeValue);
            let balanceNumber = parseFloat(balance.value);

            // Check if the conversion resulted in NaN
            if (!isNaN(sanitizedNumber) && !isNaN(balanceNumber)) {
                // Calculate the new balance
                let balanceValue = balanceNumber - sanitizedNumber;

                // Update the balance value
                balance.value = balanceValue;
            } else {
                balance.value = passValue;
            }
        } else {
            let balanceValue = parseInt(balance.value) + parseInt(money.value)
            balance.value = balanceValue

        }
    }
    console.log(parseInt(balance) + money.value)

})
