//UI Variables
let submitBtn = document.getElementById("submit-btn"),
  userGuess = document.getElementById("user-guess"),
  response = document.getElementById("response"),
  newGameBtn = document.getElementById("new-game");
(guessRecord = document.getElementById("guess-record")),
  (randomAnswer = 0),
  (counter = 10);

newGameBtn.style.display = "none";
response.textContent = "";
submitBtn.addEventListener("click", checkGuess);

//Generate a random number between 1 and 100.
function getARandomNumber() {
  randomAnswer = Math.floor(Math.random() * 100 + 1);
  console.log(randomAnswer);
}

getARandomNumber();

//showResponse, error or success
function showResponse(message, type) {
  response.textContent += message;
  response.className = `alert alert-${type}`;

  //add timeout so that the message can disapear
  setTimeout(() => {
    response.textContent = '';
    response.className = '';
  }, 3000);
}

//start new game
function startGame(ev) {
  counter = 10;
  userGuess.disabled = false;
  submitBtn.disabled = false;
  newGameBtn.style.display = "none";
  guessRecord.textContent = "";
  response.textContent = "";
  response.className = "";
  userGuess.value = "";

  getARandomNumber();

  ev.preventDefault();
}

//Check the guess
function checkGuess(ev) {
  let userGuessNumber = parseInt(userGuess.value);
  console.log(userGuessNumber);

  guessRecord.textContent += `${userGuessNumber} `;

  if (userGuessNumber === randomAnswer) {
    showResponse("Congratulations! You got that correct!", "info");
    counter = 0;
    userGuess.disabled = true;

    submitBtn.disabled = true;
    newGameBtn.style.display = "block";

    newGameBtn.addEventListener("click", startGame);
  } else {
    counter--;
    if (userGuessNumber < randomAnswer) {
      showResponse(`Wrong! Number is too low. You have ${counter} guesses remaining`, 'warning');
    } else if (userGuessNumber > randomAnswer) {
      showResponse(`Wrong! Number is too high. You have ${counter} guesses remaining`, 'warning');
    }
  }

  if (counter === 0 && userGuessNumber !== randomAnswer) {
    showResponse(`Your guesses are over! The answer was ${randomAnswer}. Start a new game`, "warning");
    userGuess.disabled = true;

    submitBtn.disabled = true;
    newGameBtn.style.display = "block";

    newGameBtn.addEventListener("click", startGame);
  }

  ev.preventDefault();
}


