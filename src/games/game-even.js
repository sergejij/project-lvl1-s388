import readlineSync from 'readline-sync';
import generateNum from '../utils';

const threeTime = 3;
const userAnswer = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const iter = (win) => {
    if (win > threeTime) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const number1 = generateNum();
    const answer = readlineSync.question(`Question: ${number1} \nYour answer: `);

    const isEven = num => (num % 2 === 0 ? 'yes' : 'no');
    if (answer === isEven(number1)) {
      console.log('Correct!');
      iter(win + 1);
      return;
    }
    console.log(`${answer} is wrong answer ;(. Correct answer was ${isEven(number1)}. \n`);
    console.log(`Let's try again, ${name}!`);
  };
  iter(1);
};

export default userAnswer;
