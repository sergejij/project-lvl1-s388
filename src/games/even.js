import generateNum from '../utils';
import engine from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';
const isEven = num => num % 2 === 0;
const issueGame = () => {
  const num = generateNum(1, 50);
  const question = String(num);
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return { correctAnswer, question };
};

export default () => engine(description, issueGame);
