//UI Variables
let submitBtn = document.getElementById("submit-btn"),
  userGuess = document.getElementById("user-guess"),
  response = document.getElementById("response"),
  newGameBtn = document.getElementById("new-game");
  guessRecord = document.getElementById("guess-record"),
  randomAnswer = 0,
  counter = 10;

//Hide the 'New Game' button anbd set the response paragrapht to empty
newGameBtn.style.display = "none";
response.textContent = "";

//create an EL for the submit button
submitBtn.addEventListener("click", checkGuess);

//Create a function to generate a random number between 1 and 100 and call it when the page runs.
function getARandomNumber() {
  randomAnswer = Math.floor(Math.random() * 100 + 1);
  console.log(randomAnswer);
}

getARandomNumber();

//create a function showResponse(), to show whether it is an error or success
function showResponse(message, type) {
  response.textContent = message;
  response.className = `alert alert-${type}`;
}

//start new game after the button is clicked - this completely restes the game logic and UI, and creates a new number by calling the getARandomNumber() function. 
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

//Check the user's guess.
function checkGuess(ev) {
  let userGuessNumber = parseInt(userGuess.value);
  console.log(userGuessNumber);

  //display the user's guesses
  guessRecord.textContent += `${userGuessNumber} `;

  //if the answer is correct
  if (userGuessNumber === randomAnswer) {
    showResponse("Congratulations! You got that correct!", "info");
    counter = 0;
    userGuess.disabled = true;

    submitBtn.disabled = true;
    newGameBtn.style.display = "block";

    newGameBtn.addEventListener("click", startGame);
  } else {
    //if number is not correct, keep track of the counter as it decrements and let the user know how many guesses remain
    counter--;
    if (userGuessNumber < randomAnswer) {
      showResponse(`Wrong! Number is too low. You have ${counter} guesses remaining`, 'warning');
    } else if (userGuessNumber > randomAnswer) {
      showResponse(`Wrong! Number is too high. You have ${counter} guesses remaining`, 'warning');
    }
  }

  //once the counter gets to 0 and the guess is still wrong (i had a problem with this because without the logical && operator, it would display both the message for the correct guess and this one)
  if (counter === 0 && userGuessNumber !== randomAnswer) {
    showResponse(`Your guesses are over! The answer was ${randomAnswer}. Start a new game`, "warning");
    userGuess.disabled = true;

    submitBtn.disabled = true;
    newGameBtn.style.display = "block";

    newGameBtn.addEventListener("click", startGame);
  }

  ev.preventDefault();
}


