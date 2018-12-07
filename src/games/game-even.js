import generateNum from '../utils';
import { engine } from '..';

const description = 'Answer "yes" if number even otherwise answer "no".\n';
const issueGame = () => {
  const randomNum = generateNum(1, 50);
  const question = String(randomNum);
  const isEven = num => num % 2 === 0;
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  return { correctAnswer, question };
};
const evenGame = () => {
  engine(description, issueGame);
};
export default evenGame;
