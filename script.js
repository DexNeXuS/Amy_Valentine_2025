// Function to update the countdown timer
function updateCountdown() {
    const targetDate = new Date("2025-02-14T00:00:00");  // Valentine's Day date
    const now = new Date();
    const timeRemaining = targetDate - now;  // Difference in milliseconds

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the countdown on the page
    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Update every second
    setTimeout(updateCountdown, 1000);
}

// Initialize the countdown when the page loads
window.onload = function() {
    updateCountdown();
    loadPoems();
};

// JSON data with poems
const poems = [
    {
        "id": "poem1",
        "title": "We Always Knew",
        "date": "November 23, 2024",
        "content": `A part of me was always waiting, <br> A quiet whisper that never left. <br><br> And a part of you, though distant, <br> Lingered like a melody in my chest. <br><br> Now, I stand before you, bare and open, <br> Reaching for you with all I am. <br><br> Your gaze, my compass, my sanctuary, <br> The truest connection I’ve ever known. <br><br> We knew it then, as surely as we know now, <br> As surely as the sun will rise tomorrow. <br><br> You came back into my life <br> And healed me, tenderly, completely. <br><br> You soothed my scars, <br> Turned my wounds into stories of strength. <br><br> We’ve always known. We’ve always been. <br> And now, we finally are.`
    },
    {
        "id": "poem2",
        "title": "I wasn’t there",
        "date": "November 23, 2024",
        "content": `A time defined by empty. <br> A feeling words can’t describe. <br><br> The language of our hearts is one spoken not with a tongue but with the eyes. <br> Did it matter and could it have mattered? <br><br> Did the empty ever fill? <br> They say distance makes the heart grow fonder, yet mine, maybe it just grew smaller. <br><br> I wasn’t there. If I could have been there for everything, I would have. <br><br> To guard the nights you felt alone, <br> to hold the dreams that drifted from us, <br> To keep safe every unspoken wish that waited, growing fainter. <br><br> Now, here we are! <br> In the space that was always meant to be filled, <br> In the closeness we fought time to find. <br><br> All those lost chances, all the weight of “what could have been,” <br> Falling away, leaving only this, this truth, this us.`
    },
    {
        "id": "poem3",
        "title": "Where Did We Go Wrong?",
        "date": "November 23, 2024",
        "content": `And I want to know from you, <br> Where did we go wrong? <br> What did we do right? <br><br> Did you ever look up at the stars and wonder all night? <br> Was there ever a moment, just one where you knew, <br> That maybe, just maybe, you wished we pushed through? <br><br> I carried you with me, your sweet voice in my skin, <br> A reminder that even apart, you were always within. <br><br> Looking back at myself, I barely saw “me”, <br> Just a reflection of who I used to be. <br><br> But now here we are, after all we’ve been through, <br> The stars have aligned, bringing me back to you.`
    },
    {
        "id": "poem4",
        "title": "Forever Entwined",
        "date": "December 9, 2024",
        "content": `There are no words vast enough, <br> no language rich enough to capture the depth of what you mean to me. 	<br><br> From the moment we found our way back to each other, <br> it feels as though the universe itself sighed in relief, 	setting right what had always been meant to be. <br><br> You are my beginning and my end, <br> my past and my future, my 	everything in between. <br><br> With you, I’ve come to understand what it means to truly be seen, <br> to share something rare 	and beautiful. <br><br> And then there’s Riley. <br> Bonding with her has been one of the greatest joys of my life. <br><br> 	Watching her smile, hearing her laughter, and sharing those small, quiet moments each one feels like a gift. <br><br> I adore you 	Amy Harrison 💗`
    }
];

// Function to generate sidebar and display poems
function loadPoems() {
    const sidebar = document.getElementById('sidebar-navbar');
    const poemContainer = document.getElementById('poem-container');

    poems.forEach(poem => {
        // Sidebar link
        const sidebarLink = document.createElement('a');
        sidebarLink.href = "#";
        sidebarLink.onclick = function() { showPoem(poem.id); };
        sidebarLink.innerHTML = poem.title;
        const dateSpan = document.createElement('span');
        dateSpan.classList.add('date');
        dateSpan.innerHTML = `- ${poem.date}`;
        sidebarLink.appendChild(dateSpan);
        sidebar.appendChild(sidebarLink);

        // Poem container
        const poemElement = document.createElement('div');
        poemElement.id = poem.id;
        poemElement.classList.add('poem');
        poemElement.innerHTML = poem.content;
        poemElement.style.display = 'none'; // Hide poems initially
        poemContainer.appendChild(poemElement);
    });

    // Show the first poem by default
    showPoem(poems[0].id);
}

// Function to show selected poem
function showPoem(poemId) {
    // Hide all poems
    const poemsElements = document.querySelectorAll('.poem');
    poemsElements.forEach(poem => poem.style.display = 'none');

    // Show the selected poem
    document.getElementById(poemId).style.display = 'block';
}

// Function to move the No button
const noResponses = [
    "Are you sure?... Seems like you want to say yes... 😅",
    "I think you accidentally clicked no :')... Try again!",
    "Nooooooo... Let's try this again, yes? 💖",
    "Hmm, I think you meant to click Yes... 😜",
    "Are you playing hard to get? Go ahead and click Yes 😉"
];

function goToMainSite() {
    window.location.href = 'main.html';
}

function moveNoButton() {
    let noButton = document.querySelector('.no');
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    
    let buttonWidth = noButton.offsetWidth;
    let buttonHeight = noButton.offsetHeight;
    
    // Ensure the "No" button stays within the viewport
    let x = Math.random() * (windowWidth - buttonWidth);
    let y = Math.random() * (windowHeight - buttonHeight);

    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;

    // Display a random message at the bottom
    displayRandomResponse();
}

function displayRandomResponse() {
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = noResponses[Math.floor(Math.random() * noResponses.length)];
    responseMessage.style.display = 'block';

    // Hide the message after a few seconds
    setTimeout(() => {
        responseMessage.style.display = 'none';
    }, 3000);
}

function createHearts() {
    if (document.body.classList.contains('index-page')) {
        setInterval(() => {
            let heart = document.createElement('div');
            heart.classList.add('heart');
            document.body.appendChild(heart);
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = window.innerHeight + 'px';
            heart.style.animationDuration = Math.random() * 3 + 2 + 's';
            setTimeout(() => heart.remove(), 5000);
        }, 500);
    }
}
createHearts();

const quizData = [
    {
        question: "What’s your all-time favorite movie?",
        options: ["The Matrix", "Mars Attacks", "Pulp Fiction", "Back to the Future"],
        answer: "Mars Attacks"
    },
    {
        question: "If you could live anywhere in the world, where would it be?",
        options: ["New York", "Japan", "Australia", "Iceland"],
        answer: "Japan"
    },
    {
        question: "What’s the most adventurous thing you’ve ever done?",
        options: ["Skydiving", "Scuba diving", "Band Tour", "Climbing a mountain"],
        answer: "Band Tour"
    },
    {
        question: "If you could meet any historical figure, who would it be?",
        options: ["Julius Caesar", "Albert Einstein", "Adolf Hitler", "Leonardo da Vinci"],
        answer: "Adolf Hitler"
    },
    {
        question: "What’s your go-to comfort food when you are feeling down?",
        options: ["Pizza", "Sushi", "McDonalds", "Chocolate cake"],
        answer: "McDonalds"
    },
    {
        question: "What’s one thing you’ve always wanted to learn but haven’t yet?",
        options: ["Playing the violin", "Electrical Engineering", "Cooking gourmet meals", "Speaking French"],
        answer: "Electrical Engineering"
    },
    {
        question: "If you could have any superpower, which one would you choose?",
        options: ["Flying", "Time Travel", "Super Strength", "Invisibility"],
        answer: "Time Travel"
    },
    {
        question: "What's your dream job or career?",
        options: ["Doctor", "Coding", "Astronaut", "Music Producer"],
        answer: "Coding"
    },
    {
        question: "If you could time travel, which period in history would you visit?",
        options: ["The Roaring 1920s", "The Future", "Ancient Egypt", "The Middle Ages"],
        answer: "The Future"
    },
    {
        question: "What’s one of the most memorable vacations you've been on?",
        options: ["Road trip across Europe", "Backpacking in South America", "Edinburgh with Amy", "Beach holiday in Bali"],
        answer: "Edinburgh with Amy"
    }
];

let correctAnswers = 0;
let incorrectAnswers = 0;

// Load Quiz
function loadQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = ""; // Clear previous content if reloading

    quizData.forEach((item, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('quiz-question');
        questionElement.innerHTML = `
            <p>${index + 1}. ${item.question}</p>
            ${item.options.map(option => `
                <button onclick="checkAnswer(this, '${item.answer}', ${index})">${option}</button>
            `).join('')}
            <div id="result-${index}" class="result"></div>
        `;
        quizContainer.appendChild(questionElement);
    });
}

function checkAnswer(button, correctAnswer, questionIndex) {
    const resultElement = document.getElementById(`result-${questionIndex}`);
    const buttons = button.parentElement.querySelectorAll('button');

    // Disable all buttons after selection
    buttons.forEach(btn => btn.disabled = true);

    // Normalize text (trim and lowercase to avoid mismatches)
    if (button.innerText.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
        button.classList.add('correct');
        resultElement.innerText = "Correct! 🎉";
        resultElement.style.color = "green";
        correctAnswers++;
    } else {
        button.classList.add('incorrect');
        resultElement.innerText = `Oops! The correct answer was: ${correctAnswer}`;
        resultElement.style.color = "red";
        incorrectAnswers++;
    }

    // Show final score in the webpage after last question
    if (correctAnswers + incorrectAnswers === quizData.length) {
        setTimeout(() => {
            const quizContainer = document.getElementById('quiz-container');

            // Create a result summary
            const resultSummary = document.createElement('div');
            resultSummary.classList.add('quiz-results');
            resultSummary.innerHTML = `
                <h2>Quiz Completed!</h2>
                <p>You scored <strong>${correctAnswers}</strong> out of <strong>${quizData.length}</strong>.</p>
            `;

            // Append results to the quiz container
            quizContainer.appendChild(resultSummary);
        }, 500);
    }
}


loadQuiz();

const gallery = document.querySelector('#gallery');

// Create an array of image filenames (you can extend it with more)
const images = [];

for (let i = 1; i <= 100; i++) {
    images.push(`image${i}.jpg`);
}

// Function to load images into the gallery
function loadImages() {
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = `images/${image}`; // Adjust if needed based on your folder structure
        imgElement.alt = `Moment ${image}`;
        imgElement.classList.add('gallery-item');

        // Add hover effect when hovering over images
        imgElement.addEventListener('click', () => {
            imgElement.classList.toggle('active');
        });

        gallery.appendChild(imgElement);
    });
}

// Initial call to load images when the page is loaded
loadImages();


