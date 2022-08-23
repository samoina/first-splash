//UI variables
let guessRecord = document.getElementById("guess-record"),
  userGuess = document.getElementById("user-guess"),
  submitBtn = document.getElementById("submit-btn"),
  newGameBtn = document.getElementById("new-game"),
  response = document.getElementById("response");

newGameBtn.style.display = "none";

//Generate a random number between 1 and 100.
let randomGuess = Math.floor(Math.random() * 100) + 1;
console.log(randomGuess);

//Record the turn number the player is on. Start it on 1.
let counter = 10;

guessRecord.innerHTML = "Previous Guesses: ";
guessRecord.style.display = "none";

//Function to show correct answer, disable inputs and start new game
function showCorrectGuess(msg) {
  let p = document.createElement("p");
  p.className = "alert alert-info";
  p.innerHTML = msg;

  response.appendChild(p);

  userGuess.disabled = true;
  submitBtn.disabled = true;

  newGameBtn.style.display = "block";

  newGameBtn.addEventListener("click", function (ev) {
    newGameBtn.style.display = "none";
    response.innerHTML = "";
    guessRecord.innerHTML = "";

    userGuess.value = "";
    userGuess.disabled = false;
    submitBtn.disabled = false;

    let randomGuess = Math.floor(Math.random() * 100) + 1;
    console.log(randomGuess);
    counter = 10;

    ev.preventDefault();
  });
}

//Function to show error
function showError(errorMsg) {
  let p = document.createElement("p");
  p.className = "alert alert-danger";
  p.innerHTML = errorMsg;

  response.appendChild(p);

  setTimeout(() => {
    p.style.display = "none";
  }, 2000);
}

//Function to show Game Over
function showGameOver(gameOverMsg) {
  let p = document.createElement("p");
  p.className = "alert alert-danger";
  p.innerHTML = gameOverMsg;

  response.appendChild(p);

  userGuess.disabled = true;
  submitBtn.disabled = true;

  newGameBtn.style.display = "block";

  newGameBtn.addEventListener("click", function (ev) {
    newGameBtn.style.display = "none";
    response.innerHTML = "";
    guessRecord.innerHTML = "";

    userGuess.value = "";
    userGuess.disabled = false;
    submitBtn.disabled = false;

    counter = 10;

    ev.preventDefault();
  });
}

//Provide the player with a way to guess what the number is.
//Once a guess has been submitted first record it somewhere so the user can see their previous guesses.
submitBtn.addEventListener("click", checkGuess);

function checkGuess(ev) {
  let userAnswer = parseInt(userGuess.value);

  guessRecord.style.display = "block";
  guessRecord.innerHTML += `${userGuess.value} `;

  while (counter > 0) {
    if (userAnswer === randomGuess) {
      counter = 0;
      showCorrectGuess("Congratulations! You got it right!");
      return;
    } else {
      counter--;
      if (userAnswer < randomGuess) {
        showError(`Wrong! Your last guess was too low. Remaining Guesses: ${counter}`);
        
      } else if (userAnswer > randomGuess) {
        showError(`Wrong. Your last guess was too high. Remaining Guesses: ${counter}`);
      }
    }
  }

  if (counter === 0) {
    showGameOver("The Game is Over! You lost!");
  }

  ev.preventDefault();
}
