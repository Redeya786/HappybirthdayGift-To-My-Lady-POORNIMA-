// Function 1: Confetti Animation (Heart Shaped)
function fireConfetti() {
    confetti({
        particleCount: 150, 
        spread: 180, 
        origin: { y: 0.5 },
        shapes: ['star', 'heart'], 
        colors: ['#ff0055', '#ffd700', '#00ffaa', '#ffffff'] 
    });
}

// Function 2: PIN Check Logic
function checkPin() {
    const correctPin = "2024"; // APNA PIN YAHAN CHANGE KARO (For example: '2024' ya '2022' jo bhi clue se match kare)
    const userInput = document.getElementById('pinInput').value;
    const secretText = document.getElementById('secret-text');
    const checkBtn = document.getElementById('check-btn');

    if (userInput === correctPin) {
        // Success
        secretText.classList.remove('blurred');
        secretText.classList.add('revealed');
        checkBtn.textContent = "ACCESS GRANTED! ❤️";
        checkBtn.style.backgroundColor = "#5cb85c"; 
        
        // Final Confetti Burst
        setTimeout(() => {
            confetti({
                particleCount: 300,
                spread: 180,
                origin: { y: 0.7 },
                shapes: ['star', 'heart', 'circle'],
                colors: ['#00ffaa', '#ff0055', '#ffd700']
            });
        }, 500);

    } else {
        // Failure
        checkBtn.textContent = "WRONG CODE! Try Again.";
        checkBtn.style.backgroundColor = "#ff5733"; 
        
        setTimeout(() => {
            checkBtn.textContent = "ENTER";
            checkBtn.style.backgroundColor = "#00ffaa";
        }, 2000);
    }
}

window.onload = fireConfetti; 
