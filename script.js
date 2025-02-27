// The letter text that will appear
const letterText = `
My Dearest Pearl,

I want to start by apologizing for the times I’ve hurt you in the past.
 I deeply regret causing you pain, and I promise to be better moving forward.
 You deserve all the love and happiness in the world.
I love you more than words can say. You mean everything to me, and I cherish every moment with you.
 My favorite moments are when we cuddle — those sweet, quiet times remind me how lucky I am to have you in my life.
I want to spend forever with you, making memories, laughing together, and sharing our love.


Pearl, will you marry me and make my dreams come true? 💖


`;

// Function to show the love letter
let index = 0;
const letterElement = document.getElementById('love-letter').children[0];
function typeLetter() {
    if (index < letterText.length) {
        letterElement.innerText += letterText.charAt(index);
        index++;
        setTimeout(typeLetter, 50); // Controls the speed of typing
    }
}

// Start the letter typing animation when the page loads
window.onload = function() {
    typeLetter();
};

// Function to create hearts and animate them
function createHearts() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '💖';
    
    // Set random positions for hearts
    heart.style.left = Math.random() * 100 + 'vw'; // Random X position
    heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Random speed
    document.getElementById('hearts-container').appendChild(heart);
    
    // Remove hearts after animation completes to avoid clutter
    setTimeout(() => {
        heart.remove();
    }, 3000);
}

// Create hearts every 0.5 seconds
setInterval(createHearts, 500);

// Function for the proposal button
function showProposal() {
    // Redirect to the new page (thankyou.html) when the "Yes, I Will!" button is clicked
    window.location.href = "thankyou.html";
}
