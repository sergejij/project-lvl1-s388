import { engine } from '..';
import generateNum from '../utils';

const description = 'Find the greatest common divisor of given numbers.\n';
const funcCorrectAnswer = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return funcCorrectAnswer(num2, num1 % num2);
};
const issueGame = () => {
  const randomNum1 = generateNum(1, 20);
  const randomNum2 = generateNum(20, 40);

  const question = `${randomNum1} ${randomNum2}`;

  const correctAnswer = String(funcCorrectAnswer(randomNum1, randomNum2));
  return { correctAnswer, question };
};
const nodGame = () => {
  engine(description, issueGame);
};

export default nodGame;
