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