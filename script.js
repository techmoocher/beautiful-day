document.addEventListener('DOMContentLoaded', function() {
    // Create sakura petals
    createSakuraPetals();
    
    const button = document.getElementById('magic-button');
    const message = document.getElementById('message');
    const initialContent = document.getElementById('initial-content');
    const finalCard = document.getElementById('final-card');
    
    let clickCount = 0;
    const requiredClicks = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
    
    const tryAgainMessages = [
        "Something went wrong! Try again ♡",
        "There might be an error! Try again ♡",
        "Server failed to process! Try again ♡",
        "I have no idea what's going on! Try again ♡",
        "Oops, something's not right! Try again ♡",
        "It seems like a glitch! Try again ♡",
        "An unexpected error occurred! Try again ♡",
    ];
    
    // Create a copy of the messages array to track unused messages
    let availableMessages = [...tryAgainMessages];
    
    button.addEventListener('click', function() {
        clickCount++;
        
        if (clickCount < requiredClicks) {
            // If all messages have been used, reset the available messages
            if (availableMessages.length === 0) {
                availableMessages = [...tryAgainMessages];
            }
            
            // Get a random index from the available messages
            const randomIndex = Math.floor(Math.random() * availableMessages.length);
            
            // Get the message and remove it from available messages
            const selectedMessage = availableMessages.splice(randomIndex, 1)[0];
            
            message.textContent = selectedMessage;
            message.classList.remove('hidden');
            
            // Add a subtle animation to the button
            button.style.animation = 'none';
            setTimeout(() => {
                button.style.animation = 'pulse 0.5s';
            }, 10);
        } else {
            // Show the final card
            initialContent.classList.add('hidden');
            finalCard.classList.remove('hidden');
        }
    });
    
    // Function to create sakura petals
    function createSakuraPetals() {
        const container = document.querySelector('.sakura-container');
        const petalCount = 30;
        
        for (let i = 0; i < petalCount; i++) {
            const petal = document.createElement('div');
            petal.classList.add('sakura');
            
            // Random position, size, and animation duration
            const left = Math.random() * 100;
            const size = Math.random() * 10 + 5;
            const duration = Math.random() * 10 + 5;
            const delay = Math.random() * 10;
            
            petal.style.left = `${left}%`;
            petal.style.width = `${size}px`;
            petal.style.height = `${size}px`;
            petal.style.animationDuration = `${duration}s`;
            petal.style.animationDelay = `${delay}s`;
            
            container.appendChild(petal);
        }
    }
});