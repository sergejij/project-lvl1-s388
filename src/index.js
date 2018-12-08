import readlineSync from 'readline-sync';

const stopIfMore = 3;

const firstGreeting = (description) => {
  console.log('Welcome to Brain Games!');
  console.log(`${description} \n`);
};

const askName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const answerUser = (question) => {
  const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
  return answer;
};

const engine = (description, issueGame) => {
  firstGreeting(description);
  const userName = askName();

  const iter = (counterWins) => {
    if (counterWins === stopIfMore) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const { correctAnswer, question } = issueGame();
    const userAnswer = answerUser(question);
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    iter(counterWins + 1);
  };
  iter(0);
};

export default engine;
