import generateNum from '../utils';
import engine from '..';

const description = 'What number is missing in the progression?';
const issueGame = () => {
  let question = '';
  let correctAnswer;

  const positionMissingNum = generateNum(2, 9);
  const insteadMissingNum = '..';
  const emptySpace = ' ';

  const firstCircleNum = 0;
  const lastCircleNum = 10;
  const firstProgressionNum = generateNum(5, 25);
  const stepProgression = generateNum(1, 10);

  const iter = (countCircle, startNumber, step) => {
    if (countCircle === lastCircleNum) {
      return { correctAnswer, question };
    }
    if (countCircle === positionMissingNum) {
      correctAnswer = String(startNumber);
      question += `${insteadMissingNum} ${emptySpace}`;
      return iter(countCircle + 1, startNumber + step, step);
    }
    question += startNumber + emptySpace;
    return iter(countCircle + 1, startNumber + step, step);
  };
  return iter(firstCircleNum, firstProgressionNum, stepProgression);
};

export default () => engine(description, issueGame);
