document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname === "/viewtransaction") {
        var newTransactionLink = document.getElementById("newTransaction");
        if (newTransactionLink) {
            newTransactionLink.style.display = "none";
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const newTransactionLink = document.getElementById("viewTransaction");

  

    const container = document.getElementById("navbarNav");

    // Add an event listener to links to initiate the fade-out effect
    // document.querySelectorAll('a').forEach(link => {
    //     link.addEventListener('click', function (event) {
    //         event.preventDefault();
    //         const href = this.getAttribute('href');

    //         // Start the fade-out effect
    //         container.classList.add('fade-out');

    //         // Wait for the transition to complete before navigating
    //         setTimeout(() => {
    //             window.location.href = href;
    //         }, 500); // Match this duration with your CSS transition time
    //     });
    // });
});
