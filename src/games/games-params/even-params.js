import getRandom, { isEven } from '../../tools';

const PARAMS = {
  minVal: 1,
  maxVal: 100,
  answerYes: 'yes',
  answerNo: 'no',
  msg: 'Answer "yes" if number even, otherwise answer "no".',
  generateQuestion: () => Math.round(getRandom(PARAMS.minVal, PARAMS.maxVal)),
  getCorrectAnswer: number => (isEven(number) ? PARAMS.answerYes : PARAMS.answerNo),
};

export default PARAMS;
