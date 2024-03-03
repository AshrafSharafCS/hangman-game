const answerSection = document.getElementById("answer-section");
const words = ["software", "web", "laravel", "javascript", "nabiha"];
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
        answerSection.innerHTML += guessedLetter;
        correctLetters = correctLetters.filter(
          (item) => item !== guessedLetter
        );
        if (correctLetters.length == 0) {
          setTimeout(function () {
            GameOver();
          }, 500);
        }
      } else {
        attempts -= 1;
        if (attempts === 5) {
          head();
        } else if (attempts === 4) {
          body();
        } else if (attempts === 3) {
          rightHand();
        } else if (attempts === 2) {
          leftHand();
        } else if (attempts === 1) {
          rightLeg();
        } else if (attempts === 0) {
          leftLeg();
          setTimeout(function () {
            GameOver();
          }, 500);
        }
      }
    }
  } else {
    alert("Wrong input");
  }
}

function GameOver() {
  if (attempts > 0 && correctLetters.length == 0) {
    alert("You WON! The word was:" + word);
  } else {
    alert("GameOver you lost! The word was: " + word);
  }
  resetGame();
 
}

function updateHTML(input) {}

document.addEventListener("keydown", function (event) {
  guess = event;
  check(guess);
  updateHTML();
});

