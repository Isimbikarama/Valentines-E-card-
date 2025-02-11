function getQueryParam(name){
    const urlParam = new URLSearchParams(window.location.search);
    return urlParam.get(name);
}
function createHeart(){
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Set random horizontal position
    heart.style.left = Math.random() * 100 + "vw";

    //to set random animation duration
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";


    // Set initial top position (so it starts above the screen)
    heart.style.top = "-50px"; 

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000); // Remove after animation ends
}


function sendlove(){
    let name = getQueryParam("name") || "pookie";
    let message = document.getElementById("message");
    message.innerHTML =`and ${name} you're loved `;
    setTimeout(() =>{
        message.style.opacity = 1;
    },100);

  for(let i = 0; i < 50; i++) {
    setTimeout(createHeart, i* 100);
  } 
}

function openLetter() {
    const letter = document.getElementById("letter");
    const envelope = document.getElementById("envelope");
    const buttons = document.querySelector(".buttons");

    // Get window dimensions
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Get letter dimensions
    const letterWidth = letter.offsetWidth;
    const letterHeight = letter.offsetHeight;

    // Dynamically position the letter in the center
    letter.style.left = `${(windowWidth - letterWidth) / 2}px`;
    letter.style.top = `${((windowHeight - letterHeight) / 2) + 50}px`;

    // Animate the letter appearing from the envelope
    setTimeout(() => {
        letter.style.opacity = "1";
        letter.style.transform = "scale(1)";
        buttons.style.opacity = "1"; // Show buttons
    }, 1000);

    // Fade out the envelope
    setTimeout(() => {
        envelope.classList.add("fade-out");
    }, 1500);
}




sendlove();

let noClicks = 0;

function rejectLove() {
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
    const letter = document.getElementById("letter");

    noClicks++;

    // Get screen width & height
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Increase YES button size but prevent it from overflowing
    let newScale = 1 + noClicks * 0.50; // Growth factor
    let maxScale = 2; // Prevent it from growing too big
    yesBtn.style.transform = `scale(${Math.min(newScale, maxScale)})`;

    // Move NO button but keep it within screen boundaries
    let moveX = Math.min(noClicks * 25, screenWidth / 2 - 50); // Max half screen width
    let moveY = Math.min(noClicks * 10, screenHeight / 2 - 50); // Max half screen height
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;

    // Select letter content
    let letterText = letter.querySelector("p");
    let letterImage = letter.querySelector("img");

    // Update text & image based on NO clicks
    if (noClicks === 1) {
        letterText.innerHTML = "You thought you could reject me? Stop joking and accept my valentine!!";
        letterImage.src = "/milk laughing.webp";
    } else if (noClicks === 2) {
        letterText.innerHTML = "NAHHH, you can't be for real right now! Just click YES, plzzz.";
        letterImage.src = "/milk tantrum.gif";
    } else if (noClicks === 3) {
        letterText.innerHTML = "You can't do me like this... c'mon, just click! 😢";
        letterImage.src = "/milk.gif";
    } else if (noClicks === 5) {
        letterText.innerHTML = "So it's over, huh...";
        letterImage.src = "/broken.gif";
        noBtn.style.display = "none"; // Hide NO button after 5 clicks
    }
}


function acceptLove() {
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
    
    yesBtn.style.display = "none";
    noBtn.style.display = "none";


// Change text and image
const letter = document.getElementById("letter");
letter.innerHTML = `
    <p>
        Yay! I knew you'd say YES! ❤️<br />
        Can't wait to spend Valentine's with you!
    </p>
    <img src="/milkandmocha.gif" alt="Happy Celebration" />
`;
    sendlove(); // Trigger heart animation again
}
