// Function for Menu Page
function addToOrder(item) {
    alert(item + " has been added to your cart!");
}

// Function for Booking Page
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Stop page refresh
        
        const name = document.getElementById('name').value;
        const date = document.getElementById('date').value;
        const msg = document.getElementById('bookingMessage');

        // Simple validation
        if(name.length < 3) {
            alert("Please enter a valid name");
            return;
        }

        // Success simulation
        msg.style.color = "green";
        msg.innerHTML = `✅ Thanks ${name}! Table booked for ${date}.`;
        bookingForm.reset();
    });
}