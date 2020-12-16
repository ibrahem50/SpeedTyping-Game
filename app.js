window.addEventListener('load', init);

//levels
const levels = {
        easy: 5,
        medium: 3,
        hard: 2
    }
    //change level
const currentLevel = levels.easy;
let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const highscoreDisplay = document.querySelector('#highscore');
const words = [
    'hat',
    'river',
    'ibrahem',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'anything',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition',
];

//Initial game
function init() {
    //show number of seconds in ui
    seconds.innerHTML = currentLevel;
    // load word from array
    showWord(words);
    // start typing
    wordInput.addEventListener('input', startMatch);
    // countdown
    setInterval(countDown, 1000);
    //check game status
    setInterval(checkStatus, 50);

}
//start play
function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }

}
//match currentWrd
function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!!!';
        return true;

    } else {
        message.innerHTML = ''
        return false;
    }
}
// retrive and show random word 
function showWord(words) {
    const randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex];
}
//count down timer
function countDown() {
    if (time > 0) {
        time--;
    } else if (time === 0) {
        isPlaying = false;
    }
    // show time in ui
    timeDisplay.innerHTML = time;
}

//check game status
function checkStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = 'GameOver!!!';
        score = -1;
    }
}