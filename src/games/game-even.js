import generateNum from '../utils';
import { engine } from '..';

const evenGame = () => {
  const description = 'Answer "yes" if number even otherwise answer "no".\n';
  const issueGame = () => {
    const randomNum = generateNum();
    const strQuestion = String(randomNum);
    const isEven = num => num % 2 === 0;
    const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
    return { correctAnswer, strQuestion };
  };
  engine(description, issueGame);
};
export default evenGame;
