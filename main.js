//UI variables
let guessRecord = document.getElementById("guess-record"),
  userGuess = document.getElementById("user-guess"),
  submitBtn = document.getElementById("submit-btn"),
  newGameBtn = document.getElementById("new-game");

newGameBtn.style.display = "none";

//Generate a random number between 1 and 100.
let randomGuess = Math.floor(Math.random() * 100) + 1;
console.log(randomGuess);

//Record the turn number the player is on. Start it on 1.
let counter = 0;

guessRecord.innerHTML = "Previous Guesses: ";
guessRecord.style.display = "none";

//Function to show correct answer, disable inputs and start new game
function showCorrectGuess(msg) {
  let response = document.getElementById("response");
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

    userGuess.value = '';
    userGuess.disabled = false;
    submitBtn.disabled = false;

    ev.preventDefault();
  });
}

//Provide the player with a way to guess what the number is.
//Once a guess has been submitted first record it somewhere so the user can see their previous guesses.
submitBtn.addEventListener("click", checkGuess);

function checkGuess(ev) {
  guessRecord.style.display = "block";
  guessRecord.innerHTML += `${userGuess.value} `;

  if (parseInt(userGuess.value) === randomGuess) {
    showCorrectGuess("Congratulations! You got it right!");
  }

  ev.preventDefault();
}
