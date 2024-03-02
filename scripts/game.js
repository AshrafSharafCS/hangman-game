const words = ["web"];
// const words = ["software", "web", "laravel", "javascript", "nabiha"];
const attempts = 6;
const randomNum = Math.floor(Math.random() * words.length);
const word = words[randomNum];

let letters = word.split("");
let alreadyGuessedArray = [];
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
  let chk = false;
  for (let k = 0; k < alreadyGuessedArray.length; k++) {
    if (guess == alreadyGuessedArray[k]) {
      console.log("already guess");
      chk = true;
      break;
    } else {
      chk = false;
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
      console.log(alreadyGuessedArray);
      console.log(alreadyGuessedArray.length);
      for (let i = 0; i < letters.length; i++) {
        if (guessedLetter == letters[i]) {
          founded = true;
          break;
        }
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
