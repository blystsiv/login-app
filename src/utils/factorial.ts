export const factorial = (number: number): any => {
  if (number === null || number <= -1) return false;
  if (number === undefined) throw new Error('Number should be defined');
  if (typeof number === 'string') throw new Error('Argument should be a number');

  return number === 0 ? 1 : number === 1 ? number : number * factorial(number - 1);
};
