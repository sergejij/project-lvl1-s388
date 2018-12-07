import generateNum from '../utils';
import { engine } from '..';

const description = 'What is the result of the expression?\n';
const issueGame = () => {
  const randomNum1 = generateNum(1, 50);
  const randomNum2 = generateNum(1, 50);

  const plus = 1;
  const minus = 2;
  const multi = 3;

  let correctAnswerInt;
  let question;
  const numberRandomOperand = generateNum(1, 4);

  switch (numberRandomOperand) {
    case plus:
      correctAnswerInt = randomNum1 + randomNum2;
      question = `${randomNum1} + ${randomNum2}`;
      break;
    case minus:
      correctAnswerInt = randomNum1 - randomNum2;
      question = `${randomNum1} - ${randomNum2}`;
      break;
    case multi:
      correctAnswerInt = randomNum1 * randomNum2;
      question = `${randomNum1} * ${randomNum2}`;
      break;
    default:
      break;
  }
  const correctAnswer = String(correctAnswerInt);
  return { correctAnswer, question };
};
const calcGame = () => {
  engine(description, issueGame);
};

export default calcGame;
