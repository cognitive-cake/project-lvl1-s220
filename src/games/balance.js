import makePair from '../pairs';
import getRandom, { arrToNum } from '../tools';
import runEngine from '..';

const correctingArray = (currVal, index, arr) => {
  switch (index) {
    case 0:
      return parseInt(currVal, 10) + 1;
    case arr.length - 1:
      return parseInt(currVal, 10) - 1;
    default:
      return parseInt(currVal, 10);
  }
};

const balancingArrayOfNums = (array) => {
  const sortedArray = array.sort();
  const lowestNum = sortedArray[0];
  const highestNum = sortedArray[sortedArray.length - 1];

  if (highestNum - lowestNum <= 1) {
    console.log(sortedArray); // Для демонстрации этапов вычисления сбалансированного числа
    return sortedArray;
  }

  const result = sortedArray.map(correctingArray);
  console.log(result); // Для демонстрации этапов вычисления сбалансированного числа
  return balancingArrayOfNums(result);
};

const getCorrectAnswer = (num) => {
  const arrayOfNums = String(num).split('');
  const correctAnswer = balancingArrayOfNums(arrayOfNums);

  return arrToNum(correctAnswer);
};

const createTask = () => {
  const question = Math.round(getRandom(100, 9999));
  const correctAnswer = getCorrectAnswer(question);
  return makePair(question, correctAnswer);
};

const runGame = () => {
  runEngine(createTask, 'Balance the given number.');
};

export default runGame;
