import engine from '..';
import generateNum from '../utils';

const description = 'Find the greatest common divisor of given numbers.';
const findGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return findGcd(num2, num1 % num2);
};
const issueGame = () => {
  const num1 = generateNum(1, 20);
  const num2 = generateNum(20, 40);

  const question = `${num1} ${num2}`;

  const correctAnswer = String(findGcd(num1, num2));
  return { correctAnswer, question };
};
export default () => engine(description, issueGame);
