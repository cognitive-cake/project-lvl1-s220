import makePair from '../pairs';
import getRandom, { isPrime } from '../tools';
import runEngine from '..';

const getCorrectAnswer = number => (isPrime(number) ? 'yes' : 'no');


const createTask = () => {
  const question = Math.round(getRandom(2, 199));
  const correctAnswer = getCorrectAnswer(question);
  return makePair(question, correctAnswer);
};

const runGame = () => {
  runEngine(createTask, 'Is this number prime? Answer \'yes\' or \'no\'.');
};

export default runGame;
