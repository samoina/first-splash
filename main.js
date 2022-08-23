//UI variables
let guessRecord = document.getElementById('guess-record'),
    userGuess = document.getElementById('user-guess'),
    response = document.getElementById('response'),
    submitBtn = document.getElementById('submit-btn');



//Generate a random number between 1 and 100.
let randomGuess = Math.floor(Math.random() * 100) + 1;
console.log(randomGuess);

//Record the turn number the player is on. Start it on 1.
let counter = 0;

guessRecord.innerHTML = 'Previous Guesses: ';
guessRecord.style.display = 'none';

//Provide the player with a way to guess what the number is.
//Once a guess has been submitted first record it somewhere so the user can see their previous guesses.
submitBtn.addEventListener('click', checkGuess);

function checkGuess(ev){

guessRecord.style.display = 'block';
guessRecord.innerHTML += `${userGuess.value} `;

  ev.preventDefault();
}



