import makePair from '../pairs';
import getRandom from '../tools';
import runEngine from '..';

const getQuestion = (step, value, missingNum) => {
  const iter = (str, num, counter) => {
    if (counter === 10) {
      return str;
    }
    if (counter === missingNum) {
      return iter(
        str.concat('.. '),
        num + step,
        counter + 1,
      );
    }
    return iter(
      str.concat(`${num} `),
      num + step,
      counter + 1,
    );
  };
  return iter('', value, 0);
};

const getCorrectAnswer = (step, firstNum, missingNum) => firstNum + (missingNum * step);

const createTask = () => {
  const step = Math.round(getRandom(2, 10));
  const firstNum = Math.round(getRandom(2, 15));
  const missingNum = Math.round(getRandom(0, 9));

  const question = getQuestion(step, firstNum, missingNum);
  const correctAnswer = getCorrectAnswer(step, firstNum, missingNum);

  return makePair(question, correctAnswer);
};

const runGame = () => {
  runEngine(createTask, 'What number is missing in this progression?');
};

export default runGame;
