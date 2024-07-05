'use strict';

let score = 20;
let highScore = 0;
const unknown = Math.trunc(Math.random() * 100) + 1;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const restart = function () {
  score = 0;
  highScore = 0;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;

  document.querySelector('.highscore').textContent = highScore;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

console.log(unknown);
document.querySelector('.check').addEventListener('click', function () {
  const guessedScore = Number(document.querySelector('.guess').value);

  if (!guessedScore) {
    displayMessage('Number should be greater than 0');
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guessedScore === unknown) {
    displayMessage('Correct Number');
    document.querySelector('.number').textContent = guessedScore;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessedScore !== unknown) {
    if (score > 1) {
      displayMessage(
        guessedScore > unknown
          ? 'Predicted Number is greater than the unknown'
          : 'Predicted Number is lesser than the unknown'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the Game');
      restart();
    }
    // if (score === 0) {
    //   restart();
    // }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start Guessing Again');
  restart();
});
