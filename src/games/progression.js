import makePair from '../pairs';
import getRandom from '../tools';
import runEngine from '..';

const createArithmeticProgression = (str, step, value, missingNum, counter) => {
  if (counter === 10) {
    return str;
  }
  if (counter === missingNum) {
    return createArithmeticProgression(
      str.concat('.. '),
      step,
      value + step,
      missingNum,
      counter + 1,
    );
  }
  return createArithmeticProgression(
    str.concat(`${value} `),
    step,
    value + step,
    missingNum,
    counter + 1,
  );
};

const createTask = () => {
  const step = Math.round(getRandom(2, 10));
  const firstNum = Math.round(getRandom(2, 15));
  const missingNum = Math.round(getRandom(0, 9));
  const question = createArithmeticProgression('', step, firstNum, missingNum, 0);

  const correctAnswer = firstNum + (missingNum * step);
  return makePair(question, correctAnswer);
};

const runGame = () => {
  runEngine(createTask, 'What number is missing in this progression?');
};

export default runGame;
