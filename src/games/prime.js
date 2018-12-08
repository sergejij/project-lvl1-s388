import generateNum from '../utils';
import engine from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isEven = (num) => {
  if (num < 2 || (num % 2 === 0 && num !== 2)) return false;

  for (let i = 3; i < num; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

const issueGame = () => {
  const num = generateNum(1, 50);
  const question = String(num);
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return { correctAnswer, question };
};
export default () => engine(description, issueGame);
