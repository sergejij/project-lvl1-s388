import readlineSync from 'readline-sync';

export const userName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const userAnswer = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const iter = (win) => {
    const threeTime = 3;
    if (win > threeTime) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const numberQuestion = Math.floor((Math.random() * (100 - 1)) + 1);
    const answer = readlineSync.question(`Question: ${numberQuestion} \nYour answer: `);

    const correctAnswer = numberQuestion % 2 === 0 ? 'yes' : 'no';
    if (answer === correctAnswer) {
      console.log('Correct!');
      iter(win + 1);
      return;
    }
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}. \n Let's try again, ${name}!`);
  };
  iter(1);
};

export const calculate = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const iter = (win) => {
    const numberOperand = Math.floor((Math.random() * (4 - 1)) + 1);
    const number1 = Math.floor((Math.random() * (100 - 1)) + 1);
    const number2 = Math.floor((Math.random() * (100 - 1)) + 1);

    const threeTime = 3;
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
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswerPlus}. \n Let's try again, ${name}!`);
    } else if (numberOperand === 2) {
      const answer = readlineSync.question(`Question:  ${number1} - ${number2} \nYour answer: `);
      if (Number.parseInt(answer, 10) === correctAnswerMinus) {
        console.log('Correct!');
        iter(win + 1);
        return;
      }
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswerMinus}. \n Let's try again, ${name}!`);
    } else {
      const answer = readlineSync.question(`Question:  ${number1} * ${number2} \nYour answer: `);
      if (Number.parseInt(answer, 10) === correctAnswerMultiply) {
        console.log('Correct!');
        iter(win + 1);
        return;
      }
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswerMultiply}. \n Let's try again, ${name}!`);
    }
  };
  iter(1);
};
