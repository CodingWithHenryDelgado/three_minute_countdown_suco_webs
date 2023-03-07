// Set the countdown time to 3 minutes
let countdown = 3 * 60;

//Get the ID countdown
const countdownText = document.getElementById('countdown');

// Create a function that updates the countdown element

function updateCountdown() {

    // Calculate the minutes remaining

    let minutes = Math.floor(countdown / 60);

    // Calculate the seconds remaining

    let seconds = countdown % 60;

    // Display the remaining time by updating the paragraph element

    countdownText.textContent = `${'0' + minutes}:${seconds.toString().padStart(2, '0')}`;

    // Decrement the countdown by 1 second
    countdown--;

    // If the countdown has reached zero, refresh the page
    if (countdown < 0) {
        location.reload();
    }
}

// Call the function every second to update the paragraph element
setInterval(updateCountdown, 1000);
