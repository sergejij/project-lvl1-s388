import readlineSync from 'readline-sync';

export const userName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const name = readlineSync.question('May I have your name? ');
export const userAnswer = (win = 1) => {
  const number = Math.floor((Math.random() * (100 - 1)) + 1);
  const actual = readlineSync.question(`Question:  ${number} `);

  if (win >= 3) {
    console.log(`Congratulations, ${name}!`);
    return;
  }

  if (number % 2 === 0) {
    if (actual === 'yes') {
      console.log('Correct!');
      return userAnswer(win + 1);
    }
    console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. \n Let's try again, ${name}!`);
    return;
  }

  if (number % 2 !== 0) {
    if (actual === 'no') {
      console.log('Correct!');
      return userAnswer(win + 1);
    }
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. \n Let's try again, ${name}!`);
  }
};
