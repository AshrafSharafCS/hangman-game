const words = ["web"];
// const words = ["software", "web", "laravel", "javascript", "nabiha"];
const attempts = 6;
const randomNum = Math.floor(Math.random() * words.length);
const word = words[randomNum];

let letters = word.split("");
const alreadyGuessedArray = [];
let correctLetter;
let guess;

//  checkLetter function to check if the pressed key is a letter using ASCII codes
function checkLetter(letter) {
  if (letter.keyCode >= 65 && letter.keyCode <= 90) {
    return true;
  } else {
    return false;
  }
}

// alreadyGuessed fucntion to check if the input letter from the user is already guessed
function alreadyGuessed(guess) {
  for (let i = 0; i < alreadyGuessedArray.length; i++) {
    if (guess == alreadyGuessedArray.length[i]) {
      return true;
    } else {
      console.log("ashraf");
      return false;
    }
  }
}

function check(guess) {
  let guessedLetter = guess.key.toLowerCase();
  if (checkLetter(guess)) {
    let founded = false;
    if (alreadyGuessed(guessedLetter)) {
      alert("already guessed letter");
    } else {
      for (let i = 0; i < letters.length; i++) {
        if (guessedLetter == letters[i]) {
          console.log("good job");
          founded = true;
          alreadyGuessedArray.push(guessedLetter);
          console.log(guessedLetter);
          console.log(alreadyGuessedArray);
          break;
        }
        founded = false;
      }
    }
  } else {
    alert("Wrong input");
  }
}

// function updateHTML() {}
document.addEventListener("keydown", function (event) {
  // console.log("game start");
  guess = event;
  check(guess);
});
