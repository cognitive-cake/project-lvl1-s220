import makePair from '../pairs';
import getRandom from '../tools';
import runEngine from '..';

const createArrayOfProgression = (arr, step, currVal, missingNum, counter) => {
  if (counter === 10) {
    return arr;
  }
  const newArray = counter === missingNum ?
    arr.concat('..') :
    arr.concat(currVal);

  return createArrayOfProgression(newArray, step, currVal + step, missingNum, counter + 1);
};

const createArithmeticProgression = () => {
  const step = Math.round(getRandom(2, 10));
  const firstNum = Math.round(getRandom(2, 15));
  const missingNum = Math.round(getRandom(0, 9));
  const array = createArrayOfProgression([], step, firstNum, missingNum, 0);

  return array.join(' ');
};

const getCorrectAnswer = (str) => {
  const arr = str.split(' ');
  const missingNumIndex = arr.findIndex(elem => elem === '..');

  if (missingNumIndex === arr.length - 1 ||
      missingNumIndex === arr.length - 2) {
    const step = arr[1] - arr[0];
    const missingNumValue = parseInt(arr[missingNumIndex - 1], 10) + step;
    return missingNumValue;
  }

  const step = arr[missingNumIndex + 2] - arr[missingNumIndex + 1];
  const missingNumValue = arr[missingNumIndex + 1] - step;
  return missingNumValue;
};

const createTask = () => {
  const question = createArithmeticProgression();
  const correctAnswer = getCorrectAnswer(question);
  return makePair(question, correctAnswer);
};

const runGame = () => {
  runEngine(createTask, 'What number is missing in this progression?');
};

export default runGame;
