import { engine } from '..';
import generateNum from '../utils';

const nodGame = () => {
  const description = 'Find the greatest common divisor of given numbers.\n';

  const issueGame = () => {
    const randomNum1 = generateNum();
    const randomNum2 = generateNum();

    const strQuestion = String(`${randomNum1} ${randomNum2}`);
    const funcCorrectAnswer = (num1, num2) => {
      if (num2 === 0) {
        return num1;
      }
      return funcCorrectAnswer(num2, num1 % num2);
    };
    const correctAnswer = Number.parseInt(funcCorrectAnswer(randomNum1, randomNum2), 10);
    return { correctAnswer, strQuestion };
  };
  engine(description, issueGame);
};

export default nodGame;
