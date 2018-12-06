import readlineSync from 'readline-sync';
import generateNum from './utils';

const stopIfMore = 3;
const firstGreeting = (description) => {
  console.log('Welcome to Brain Games!');
  console.log(description);
};

const askName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const userWin = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

const userLoss = (userName) => {
  console.log(`Let's try again, ${userName}!`);
};

const answerUser = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};
