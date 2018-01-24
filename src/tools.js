const getRandomArbitrary = (min, max) => (Math.random() * (max - min)) + min;
export const isEven = n => n % 2 === 0;
export const findGcd = (a, b) => {
  if (a % b === 0) {
    return b;
  }
  return findGcd(b, a % b);
};
export const arrToNum = arr => parseInt(arr.join(''), 10);

export default getRandomArbitrary;
