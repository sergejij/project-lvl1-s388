import readlineSync from 'readline-sync';
import generateNum from '../utils';
import { firstGreeting, askName, userWin, userLoss, answerUser } from '..';

const evenGame = () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';
  const isEven = num => num % 2 ===0;
  const randomNum = generateNum();
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
};
