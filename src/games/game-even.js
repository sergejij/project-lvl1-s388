import readlineSync from 'readline-sync';
import generateNum from '../utils';

const stopIfMore = 3;
const even = () => {
  // engine('Answer "yes" if number even otherwise answer "no".\n');
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const iter = (countUserWins) => {
    if (countUserWins > stopIfMore) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const randomNum = generateNum();
    const userAnswer = readlineSync.question(`Question: ${randomNum} \nYour answer: `);

    const isEven = num => (num % 2 === 0 ? 'yes' : 'no');
    if (userAnswer === isEven(randomNum)) {
      console.log('Correct!');
      iter(countUserWins + 1);
      return;
    }
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${isEven(randomNum)}. \n`);
    console.log(`Let's try again, ${name}!`);
  };
  iter(1);
};
export default even;
