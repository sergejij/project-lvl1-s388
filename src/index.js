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
    if (win > 3) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const number = Math.floor((Math.random() * (100 - 1)) + 1);
    const actual = readlineSync.question(`Question:  ${number} `);

    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    if (actual === correctAnswer) {
      console.log('Correct!');
      iter(win + 1);
      return;
    }
    console.log(`${actual} is wrong answer ;(. Correct answer was ${correctAnswer}. \n Let's try again, ${name}!`);
  };
  iter(1);
};
