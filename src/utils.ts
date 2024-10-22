export const validateNumericInput = (input: string): boolean => {
  return !isNaN(parseFloat(input)) && isFinite(Number(input));
};

export const performArithmeticOperations = (num1: number, num2: number, operation: string) => {
  let result;
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      throw new Error('Invalid operation');
  }
  return result;
};
