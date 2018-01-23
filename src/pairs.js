const makePair = (a, b) => {
  const pair = (getFunctionName) => {
    switch (getFunctionName) {
      case 'car':
        return a;
      case 'cdr':
        return b;
      default:
        return console.log(`Unknown function name ${getFunctionName}`);
    }
  };
  return pair;
};

export const car = pair => pair('car');
export const cdr = pair => pair('cdr');

export default makePair;
