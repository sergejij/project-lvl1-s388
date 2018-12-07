import generateNum from '../utils';
import { engine } from '..';

const calcGame = () => {
  const description = 'What is the result of the expression?\n';
  const issueGame = () => {
    let operator;
    const numberRandomOperand = Math.floor((Math.random() * (4 - 1)) + 1);
    if (numberRandomOperand === 1) {
      operator = '+';
    } else if (numberRandomOperand === 2) {
      operator = '-';
    } else {
      operator = '*';
    }
    const randomNum1 = generateNum();
    const randomNum2 = generateNum();

    const strQuestion = String(randomNum1 + operator + randomNum2);

    let correctAnswer;
    switch (operator) {
      case '+':
        correctAnswer = randomNum1 + randomNum2;
        break;
      case '-':
        correctAnswer = randomNum1 - randomNum2;
        break;
      case '*':
        correctAnswer = randomNum1 * randomNum2;
        break;
      default:
        break;
    }
    return { correctAnswer, strQuestion };
  };
  engine(description, issueGame);
};

export default calcGame;
