'use strict';
/*
console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'ABCDEF...';

// console.log(document.querySelector('.message').textContent);

// console.log(document.querySelector('.number').textContent);

// document.querySelector('.score').textContent = 15;

// document.querySelector('.highScore').textContent = 20;

// document.querySelector('.guess').value = 14;
// console.log(document.querySelect
// or('.guess').value);
let secretNumber = Math.trunc(Math.random() * 100) + 1;
console.log(secretNumber);

let score = 30;
let highScore = 0;
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  // console.log(guess, typeof guess);
  //when there is no guess
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No number!');
  }
  //Correct Guess
  else if (guess === secretNumber) {
    displayMessage('Correct number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highScore').textContent = highScore;
    }
  }
  //guess is different
  else if (guess !== secretNumber && score > 1) {
    displayMessage(
      guess > secretNumber ? 'High in Comparison!' : 'Low in Comparison!'
    );
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage('You are out of game');
    document.querySelector('.score').textContent = 0;
  }

  // guess is higher
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'High in Comparison!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You are out of game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }

  // //guess is lower
  // else if (guess < secretNumber) {
  //   if (score >= 1) {
  //     document.querySelector('.message').textContent = 'Low in Comparison!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You are out of game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 30;
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  console.log(secretNumber);

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  displayMessage('Start Guessing...');
});

*/

/*
document.querySelector('.between').textContent = '(Between 1 and 10)';

document.querySelector('.again').textContent = 'Repeat';

document.querySelector('.number').textContent = '?';

document.querySelector('.left').textContent = 'Check the number!';

document.querySelector('.score').textContent = 0;

document.querySelector('.highScore').textContent = 100;

document.querySelector('.message').textContent = 'Game begins';

// Select the h1 element
const heading = document.querySelector('h1');

// Change the text content of the h1 element
document.querySelector('h1').textContent = 'New Heading Text!';


*/

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
