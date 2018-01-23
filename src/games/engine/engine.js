import readlineSync from 'readline-sync';
import getName from '../../';
import { car, cdr } from '../../pairs';

const getQuestion = pair => car(pair);
const getAnswer = pair => cdr(pair);

const askQuestions = (generateQuestion, name) => {
  const iter = (n) => {
    if (n === 3) {
      return console.log(`Congratulations, ${name}!`);
    }

    const questionAndAnswer = generateQuestion();
    const question = getQuestion(questionAndAnswer);
    const correctAnswer = getAnswer(questionAndAnswer);

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== String(correctAnswer)) {
      console.log(`"${userAnswer}" is wrong answer ;-(.Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return null;
    }
    console.log('Correct!');
    return iter(n + 1);
  };
  return iter(0);
};


const runEngine = (generateQuestion) => {
  const name = getName();
  askQuestions(generateQuestion, name);
};

export default runEngine;
