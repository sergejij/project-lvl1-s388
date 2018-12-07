import generateNum from '../utils';
import { engine } from '..';

const description = 'What number is missing in the progression?\n';
const issueGame = () => {
  let question = '';
  let correctAnswer;
  const maxLoops = 10;
  const spaceNum = generateNum(2, 9);
  const twoPoints = '..';
  const space = ' ';

  const iter = (countLoop, startNumber, step) => {
    if (countLoop === maxLoops) {
      return { correctAnswer, question };
    }
    if (countLoop === spaceNum) {
      correctAnswer = String(startNumber);
      question += `${twoPoints} ${space}`;
      return iter(countLoop + 1, startNumber + step, step);
    }
    question += startNumber + space;
    return iter(countLoop + 1, startNumber + step, step);
  };
  return iter(0, generateNum(5, 25), generateNum(1, 10));
};

const progressGame = () => {
  engine(description, issueGame);
};
export default progressGame;
