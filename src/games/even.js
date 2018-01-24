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
  runEngine(generateQuestion, 'Answer "yes" if number even, otherwise answer "no".');
};

export default runGame;
