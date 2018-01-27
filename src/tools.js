const getRandomArbitrary = (min, max) => (Math.random() * (max - min)) + min;
export const isEven = num => num % 2 === 0;
export const findGcd = (a, b) => {
  if (a % b === 0) {
    return b;
  }
  return findGcd(b, a % b);
};
export const arrToNum = (arr, separator) => parseInt(arr.join(separator), 10);
export const isPrime = (num) => {
  const iter = (divisor) => {
    if (divisor % 2 === 0 || divisor % 3 === 0) {
      return iter(divisor + 1);
    }
    if (num % 2 === 0 || num % 3 === 0 || num % divisor === 0) {
      // console.log(num, divisor, 'Answer: no'); // Uncomment to show the answer
      return false;
    }
    if (divisor > Math.sqrt(num)) {
      // console.log(num, divisor, 'Answer: yes'); // Uncomment to show the answer
      return true;
    }
    return iter(divisor + 1);
  };
  return iter(5);
};

export default getRandomArbitrary;
