import generateNum from '../utils';
import engine from '..';

const description = 'What number is missing in the progression?';
const length = 10;

const issueGame = () => {
  let question = '';
  const numberFirstLoop = 0;
  const insteadMissingNum = '.. ';
  const emptySpace = ' ';
  const missingNumPosition = generateNum(numberFirstLoop, length);
  const firstProgressionNum = generateNum(5, 25);
  const progressionStep = generateNum(1, 10);

  for (let i = 0; i < length; i += 1) {
    if (i !== missingNumPosition) {
      question += (firstProgressionNum + progressionStep * i) + emptySpace;
    } else {
      question += insteadMissingNum;
    }
  }
  const correctAnswer = String(firstProgressionNum + progressionStep * missingNumPosition);
  return { correctAnswer, question };
};

export default () => engine(description, issueGame);
