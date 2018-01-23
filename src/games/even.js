import makePair from '../pairs';
import getRandom, { isEven } from '../tools';
import runEngine from './engine/engine';

const getCorrectAnswer = number => (isEven(number) ? 'yes' : 'no');

const generateQuestion = () => {
  const question = Math.round(getRandom(1, 100));
  const answer = getCorrectAnswer(question);
  return makePair(question, answer);
};

const runGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even, otherwise answer "no".');
  runEngine(generateQuestion);
};

export default runGame;
