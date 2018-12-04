#! /usr/bin/env node
import readlineSync from 'readline-sync';


console.log('Answer "yes" if number even otherwise answer "no".');
const generateRandomNumber = () => {
  return Math.floor((Math.random()  * (100 - 1)) + 1);
}


const userAnswer () => {
  const actual = readlineSync.question(generateRandomNumber);
  if(generateRandomNumber % 2 === 0) {
    if(actual === 'yes') {
      return 'Correct!';
    }
    return "'no' is wrong answer ;(. Correct answer was 'yes'. \n Let's try again, " + userName + "!";
  }
  if(generateRandomNumber % 2 != 0) {
    if(actual === 'no') {
      return 'Correct!';
    }
    return "'yes' is wrong answer ;(. Correct answer was 'no'. \n Let's try again, " + userName + "!";
  }
  
}
