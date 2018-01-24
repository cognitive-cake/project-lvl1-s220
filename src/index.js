import readlineSync from 'readline-sync';
import { car, cdr } from './pairs';

export const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const getQuestion = pair => car(pair);
const getAnswer = pair => cdr(pair);

const askQuestions = (createTask, name) => {
  const iter = (n) => {
    if (n === 3) {
      return console.log(`Congratulations, ${name}!`);
    }

    const task = createTask();
    const question = getQuestion(task);
    const correctAnswer = getAnswer(task);

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


const runEngine = (createTask, msg) => {
  console.log('Welcome to the Brain Games!');
  console.log(msg);
  const name = getName();
  askQuestions(createTask, name);
};

export default runEngine;
