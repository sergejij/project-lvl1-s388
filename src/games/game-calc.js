import readlineSync from 'readline-sync';
import generateNum from '../utils';

const stopIfMore = 3;
const calculate = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const iter = (countUserWins) => {
    const numberOperand = Math.floor((Math.random() * (4 - 1)) + 1);
    const randomNum1 = generateNum();
    const randomNum2 = generateNum();

    if (countUserWins > stopIfMore) {
      console.log(`Congratulations, ${name}!`);
      return;
    }

    const correctAnswerPlus = randomNum1 + randomNum2;
    const correctAnswerMinus = randomNum1 - randomNum2;
    const correctAnswerMultiply = randomNum1 * randomNum2;

    if (numberOperand === 1) {
      const userAnswer = readlineSync.question(`Question:  ${randomNum1} + ${randomNum2} \nYour answer: `);
      if (Number.parseInt(userAnswer, 10) === correctAnswerPlus) {
        console.log('Correct!');
        iter(countUserWins + 1);
        return;
      }
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswerPlus}. \n`);
      console.log(`Let's try again, ${name}!`);
    } else if (numberOperand === 2) {
      const userAnswer = readlineSync.question(`Question:  ${randomNum1} - ${randomNum2} \nYour answer: `);
      if (Number.parseInt(userAnswer, 10) === correctAnswerMinus) {
        console.log('Correct!');
        iter(countUserWins + 1);
        return;
      }
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswerMinus}. \n`);
      console.log(`Let's try again, ${name}!`);
    } else {
      const userAnswer = readlineSync.question(`Question:  ${randomNum1} * ${randomNum2} \nYour answer: `);
      if (Number.parseInt(userAnswer, 10) === correctAnswerMultiply) {
        console.log('Correct!');
        iter(countUserWins + 1);
        return;
      }
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswerMultiply}. \n`);
      console.log(`Let's try again, ${name}!`);
    }
  };
  iter(1);
};

export default calculate;
