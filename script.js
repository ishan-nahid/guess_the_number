// Generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0; // Initialize a variable to keep track of the number of attempts

// Get references to HTML elements
const guessInput = document.getElementById("guess"); // Input field for user's guess
const checkButton = document.getElementById("check"); // Button to check the guess
const message = document.getElementById("message"); // Element to display messages
const attemptsDisplay = document.getElementById("attempts"); // Element to display the number of attempts

// Add a click event listener to the "Check" button
checkButton.addEventListener("click", function() {
    const userGuess = parseInt(guessInput.value); // Get the user's guess and convert it to an integer
    attempts++; // Increment the number of attempts

    // Check if the user's input is not a valid number between 1 and 100
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a valid number between 1 and 100.";
        message.style.color = "red"
    } else if (userGuess === secretNumber) { // Check if the user's guess is correct
        message.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        message.style.color = "chartreuse"
        // confetti({
        //     particleCount: 100,
        //     spread: 70,
        //     origin: { y: 0.6 }
        // });

        var duration = 5 * 1000;
        var animationEnd = Date.now() + duration;
        var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
        }

        var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        var particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);

        
        guessInput.disabled = true; // Disable the input field
        checkButton.disabled = true; // Disable the "Check" button
    } else if (userGuess < secretNumber) { // Check if the guess is too low
        message.textContent = "Too low. Try again.";
        message.style.color = "red"
    } else { // If none of the above conditions are met, the guess is too high
        message.textContent = "Too high. Try again.";
        message.style.color = "red"
    }

    attemptsDisplay.textContent = attempts; // Update the displayed number of attempts
    guessInput.value = ""; // Clear the input field for the next guess
});
