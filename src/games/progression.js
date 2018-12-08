import generateNum from '../utils';
import engine from '..';

const description = 'What number is missing in the progression?';
const issueGame = () => {
  let question = '';
  let correctAnswer;

  const missingNumPosition = generateNum(2, 9);
  const insteadMissingNum = '..';
  const emptySpace = ' ';

  const firstCircleNum = 0;
  const length = 10;
  const firstProgressionNum = generateNum(5, 25);
  const progressionStep = generateNum(1, 10);

  const iter = (countCircle, startNumber, step) => {
    if (countCircle === length) {
      return { correctAnswer, question };
    }
    if (countCircle === missingNumPosition) {
      correctAnswer = String(startNumber);
      question += `${insteadMissingNum}${emptySpace}`;
      return iter(countCircle + 1, startNumber + step, step);
    }
    question += startNumber + emptySpace;
    return iter(countCircle + 1, startNumber + step, step);
  };
  return iter(firstCircleNum, firstProgressionNum, progressionStep);
};

export default () => engine(description, issueGame);
