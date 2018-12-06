import readlineSync from 'readline-sync';
import generateNum from '../utils';

const threeTime = 3;
const nod = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Find the greatest common divisor of given numbers.\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const iter = (win) => {
    if (win > threeTime) {
      console.log(`Congratulations, ${name}!`);
      return;
    }

    const number1 = generateNum();
    const number2 = generateNum();

    const correctAnswer = (num1, num2) => {
      if (num2 === 0) {
        return num1;
      }
      return correctAnswer(num2, num1 % num2);
    };


    const userAnswer = readlineSync.question(`Question: ${number1} ${number2}\nYour answer: `);

    if (Number.parseInt(userAnswer, 10) === correctAnswer(number1, number2)) {
      console.log('Correct!');
      iter(win + 1);
      return;
    }
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer(number1, number2)}. \n`);
    console.log(`Let's try again, ${name}!`);
  };
  iter(1);
};

export default nod;
