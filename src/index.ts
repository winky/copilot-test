import * as readline from 'readline';
import { validateNumericInput, performArithmeticOperations } from './utils';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const main = () => {
  rl.question('Enter the first number: ', (firstInput) => {
    if (!validateNumericInput(firstInput)) {
      console.error('Error: The first input must be numeric.');
      rl.close();
      return;
    }

    const num1 = parseFloat(firstInput);

    rl.question('Enter the second number: ', (secondInput) => {
      if (!validateNumericInput(secondInput)) {
        console.error('Error: The second input must be numeric.');
        rl.close();
        return;
      }

      const num2 = parseFloat(secondInput);

      rl.question('Choose an operation (+, -, *, /): ', (operation) => {
        try {
          const result = performArithmeticOperations(num1, num2, operation);
          console.log(`Result: ${result}`);
        } catch (error) {
          console.error(error.message);
        }
        rl.close();
      });
    });
  });
};

main();
