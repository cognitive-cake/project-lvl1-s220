const makePair = (q, a) => {
  const pair = (getFunctionName) => {
    switch (getFunctionName) {
      case 'car':
        return q;
      case 'cdr':
        return a;
      default:
        return console.log(`Unknown function name ${getFunctionName}`);
    }
  };
  return pair;
};

export const car = pair => pair('car');
export const cdr = pair => pair('cdr');

export default makePair;
