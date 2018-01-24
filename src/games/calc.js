import makePair from '../pairs';
import getRandom from '../tools';
import runEngine from '..';


const createTask = () => {
  const number1 = Math.round(getRandom(1, 20));
  const number2 = Math.round(getRandom(1, 20));
  const exprSignNumber = Math.floor(getRandom(0, 3));

  let question = null;
  let correctAnswer = null;

  switch (exprSignNumber) {
    case 0:
      question = `${number1} + ${number2}`;
      correctAnswer = number1 + number2;
      return makePair(question, correctAnswer);
    case 1:
      question = `${number1} - ${number2}`;
      correctAnswer = number1 - number2;
      return makePair(question, correctAnswer);
    case 2:
      question = `${number1} * ${number2}`;
      correctAnswer = number1 * number2;
      return makePair(question, correctAnswer);
    default:
      break;
  }
  return null;
};

const runGame = () => {
  runEngine(createTask, 'What is the result of the expression?');
};

export default runGame;
