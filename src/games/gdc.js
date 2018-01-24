import makePair from '../pairs';
import getRandom, { findGcd } from '../tools';
import runEngine from './engine/engine';

const getCorrectAnswer = (num1, num2) => {
  if (num1 === num2) {
    return num1;
  }
  let lowestInt = null;
  let highestInt = null;

  if (num1 > num2) {
    lowestInt = num2;
    highestInt = num1;
  } else {
    lowestInt = num1;
    highestInt = num2;
  }

  return findGcd(highestInt, lowestInt);
};

const createTask = () => {
  const num1 = Math.round(getRandom(1, 100));
  const num2 = Math.round(getRandom(1, 100));
  const question = `${num1} ${num2}`;
  const correctAnswer = getCorrectAnswer(num1, num2);
  return makePair(question, correctAnswer);
};

const runGame = () => {
  runEngine(createTask, 'Find the greatest common divisor of given numbers.');
};

export default runGame;
