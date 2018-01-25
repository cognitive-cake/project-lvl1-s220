import makePair from '../pairs';
import getRandom from '../tools';
import runEngine from '..';

let answer = null;

const addMissingNum = (arr, currVal) => {
  answer = currVal;
  return arr.concat('..');
};

const createArray = (arr, step, currVal, missingNum, counter) => {
  if (counter === 10) {
    return arr;
  }
  const newArray = counter === missingNum ?
    addMissingNum(arr, currVal) :
    arr.concat(currVal);

  return createArray(newArray, step, currVal + step, missingNum, counter + 1);
};

const createArithmeticProgression = () => {
  const step = Math.round(getRandom(2, 10));
  const firstNum = Math.round(getRandom(2, 15));
  const missingNum = Math.round(getRandom(0, 9));
  const array = createArray([], step, firstNum, missingNum, 0);

  return array.join(' ');
};

const createTask = () => {
  const question = createArithmeticProgression();
  const correctAnswer = answer;
  return makePair(question, correctAnswer);
};

const runGame = () => {
  runEngine(createTask, 'What number is missing in this progression?');
};

export default runGame;
