// Card CONFIG
const CARD_CONFIG = [{
        name: 'Alfa-Romeo',
        imagePathName: 'Alfa-Romeo-logo.jpg'
    },
    {
        name: 'Aston-Martin',
        imagePathName: 'Aston-Martin-logo.jpg'
    },
    {
        name: 'Audi',
        imagePathName: 'Audi-logo.jpg'
    },
    {
        name: 'BMW',
        imagePathName: 'bmw-logo.png'
    },
    {
        name: 'Chevrolet',
        imagePathName: 'Chevrolet-logo.jpg'
    },
    {
        name: 'Ferrari',
        imagePathName: 'ferrari-logo.png'
    },
    {
        name: 'Fiat',
        imagePathName: 'Fiat-logo.jpg'
    },
    {
        name: 'Ford',
        imagePathName: 'ford-logo.png'
    },
    {
        name: 'Honda',
        imagePathName: 'honda-logo.png'
    },
    {
        name: 'Lamborghini',
        imagePathName: 'lamborghini-logo.png'
    },
    {
        name: 'Mercedes-Benz',
        imagePathName: 'Mercedes-Benz-logo.jpg'
    },
    {
        name: 'Porsche',
        imagePathName: 'porsche-logo.png'
    },
    {
        name: 'Tesla',
        imagePathName: 'tesla-logo.png'
    },
    {
        name: 'Toyota',
        imagePathName: 'toyota-logo.png'
    },
    {
        name: 'Volkswagen',
        imagePathName: 'Volkswagen-logo.jpg'
    },

]
var cardsHtml = ""

function generateCards() {
    var cards = [...CARD_CONFIG, ...CARD_CONFIG].forEach(eachCard => {
        cardsHtml += `
                         <div class="card" data-carddata="${eachCard.name}">
                <img class="front-face" src="assets/images/${eachCard.imagePathName}" alt="card ${eachCard.name}">
                <img class="back-face" src="assets/images/card_back.png" alt="card backside">
            </div>
           `
    });
    return cards;
}
var temp = generateCards()
document.getElementById('game-board').innerHTML = cardsHtml

// Select HTML elements
const date = document.getElementById('date');
const card = document.querySelectorAll('.card');
const footerYear = document.getElementById('year');
const info = document.getElementById('info-msg');
const done = document.getElementById('done-msg');
const clickNr = document.getElementById('clicks');
const winMsg = document.getElementById('win-msg');


const currentDate = new Date();

// Show current year in the footer
footerYear.innerHTML = currentDate.getFullYear();

// Player name
function playerName() {
    var name = document.getElementById('name-input').value;

    if (name != null) {
        document.getElementById('player').innerHTML = `Welcome ${name}, enjoy.`;
    }
}
// Timer
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}

// Memory card game logic
let flippedCard = false;
let firstCard, secondCard;
let gameLock = true;
let pairs = 15;
let clicks = 0;

card.forEach(cards => cards.addEventListener('click', flipOver));
shuffle();

function flipOver() {
    if (gameLock) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!flippedCard) {
        // The first click, card
        flippedCard = true;
        firstCard = this;

    } else {
        // The second click, card
        flippedCard = false;
        secondCard = this;

        // Checking cards match? 

        if (firstCard.dataset.carddata === secondCard.dataset.carddata) {
            // It's a match
            match()

        } else {
            // Not a match
            flipBack()
        }
    }


    // Show the end game screen 
    if (pairs <= 0) {
        done.style.display = 'block';
        clickNr.innerHTML = clicks + " clicks";

        //Win message depends on the click score
        winMessage()
    }
}