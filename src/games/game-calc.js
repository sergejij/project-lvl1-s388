import readlineSync from 'readline-sync';
import generateNum from '../utils';

const threeTime = 3;
const calculate = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const iter = (win) => {
    const numberOperand = Math.floor((Math.random() * (4 - 1)) + 1);
    const number1 = generateNum();
    const number2 = generateNum();

    if (win > threeTime) {
      console.log(`Congratulations, ${name}!`);
      return;
    }

    const correctAnswerPlus = number1 + number2;
    const correctAnswerMinus = number1 - number2;
    const correctAnswerMultiply = number1 * number2;

    if (numberOperand === 1) {
      const answer = readlineSync.question(`Question:  ${number1} + ${number2} \nYour answer: `);
      if (Number.parseInt(answer, 10) === correctAnswerPlus) {
        console.log('Correct!');
        iter(win + 1);
        return;
      }
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswerPlus}. \n`);
      console.log(`Let's try again, ${name}!`);
    } else if (numberOperand === 2) {
      const answer = readlineSync.question(`Question:  ${number1} - ${number2} \nYour answer: `);
      if (Number.parseInt(answer, 10) === correctAnswerMinus) {
        console.log('Correct!');
        iter(win + 1);
        return;
      }
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswerMinus}. \n`);
      console.log(`Let's try again, ${name}!`);
    } else {
      const answer = readlineSync.question(`Question:  ${number1} * ${number2} \nYour answer: `);
      if (Number.parseInt(answer, 10) === correctAnswerMultiply) {
        console.log('Correct!');
        iter(win + 1);
        return;
      }
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswerMultiply}. \n`);
      console.log(`Let's try again, ${name}!`);
    }
  };
  iter(1);
};

export default calculate;
