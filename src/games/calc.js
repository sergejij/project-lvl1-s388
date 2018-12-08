import generateNum from '../utils';
import engine from '..';

const description = 'What is the result of the expression?';
const issueGame = () => {
  const num1 = generateNum(1, 50);
  const num2 = generateNum(1, 50);

  const plus = 1;
  const minus = 2;
  const multi = 3;

  let correctAnswerInt;
  let question;
  const numberRandomOperand = generateNum(1, 4);

  switch (numberRandomOperand) {
    case plus:
      correctAnswerInt = num1 + num2;
      question = `${num1} + ${num2}`;
      break;
    case minus:
      correctAnswerInt = num1 - num2;
      question = `${num1} - ${num2}`;
      break;
    case multi:
      correctAnswerInt = num1 * num2;
      question = `${num1} * ${num2}`;
      break;
    default:
      break;
  }
  const correctAnswer = String(correctAnswerInt);
  return { correctAnswer, question };
};

export default () => engine(description, issueGame);
