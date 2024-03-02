const words = ["web"];
// const words = ["software", "web", "laravel", "javascript", "nabiha"];
let attempts = 6;
const randomNum = Math.floor(Math.random() * words.length);
const word = words[randomNum];
const answer = document.querySelector("letter");
let letters = word.split("");
let alreadyGuessedArray = [];
let correctLetters = letters;
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
  let chk = false;
  for (let k = 0; k < alreadyGuessedArray.length; k++) {
    if (guess == alreadyGuessedArray[k]) {
      chk = true;
      break;
    }
  }
  return chk;
}

function check(guess) {
  let guessedLetter = guess.key.toLowerCase();
  if (checkLetter(guess)) {
    let founded = false;
    if (alreadyGuessed(guessedLetter)) {
      alert("Already guessed letter");
    } else {
      alreadyGuessedArray.push(guessedLetter);
      for (let i = 0; i < letters.length; i++) {
        if (guessedLetter == letters[i]) {
          founded = true;
          break;
        }
      }
      if (founded) {
        correctLetters = correctLetters.filter(
          (item) => item !== guessedLetter
        );
      } else {
        attempts -= 1;
      }
    }
  } else {
    alert("Wrong input");
  }
}

// function updateHTML() {}

document.addEventListener("keydown", function (event) {
  guess = event;
    check(guess);
});
