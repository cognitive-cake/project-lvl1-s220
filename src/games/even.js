import makePair from '../pairs';
import getRandom, { isEven } from '../tools';
import runEngine from '..';

const getCorrectAnswer = number => (isEven(number) ? 'yes' : 'no');

const createTask = () => {
  const question = Math.round(getRandom(1, 100));
  const correctAnswer = getCorrectAnswer(question);
  return makePair(question, correctAnswer);
};

const runGame = () => {
  runEngine(createTask, 'Answer "yes" if number even, otherwise answer "no".');
};

export default runGame;
