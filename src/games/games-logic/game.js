import readlineSync from 'readline-sync';
import getName from '../../';

const PARAMS = {
  numberOfQuestions: 3,
};

const askQuestion = (name, gameLogic, n) => {
  if (n === 0) {
    return console.log(`Congratulations, ${name}!`);
  }

  const question = gameLogic.generateQuestion();
  const correctAnswer = gameLogic.getCorrectAnswer(question);

  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer !== String(correctAnswer)) {
    console.log(`"${answer}" is wrong answer ;-(.Correct answer was "${correctAnswer}".`);
    console.log(`Let's try again, ${name}!`);
    return null;
  }
  console.log('Correct!');
  return askQuestion(name, gameLogic, n - 1);
};


const startGame = (gameLogic) => {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  console.log(gameLogic.msg);
  askQuestion(name, gameLogic, PARAMS.numberOfQuestions);
};

export default startGame;
