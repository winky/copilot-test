import { validateNumericInput, performArithmeticOperations } from '../src/utils';

describe('validateNumericInput', () => {
  it('should return true for valid numeric input', () => {
    expect(validateNumericInput('123')).toBe(true);
    expect(validateNumericInput('45.67')).toBe(true);
  });

  it('should return false for non-numeric input', () => {
    expect(validateNumericInput('abc')).toBe(false);
    expect(validateNumericInput('12a')).toBe(false);
  });
});

describe('performArithmeticOperations', () => {
  it('should perform addition correctly', () => {
    const result = performArithmeticOperations(2, 3, '+');
    expect(result).toBe(5);
  });

  it('should perform subtraction correctly', () => {
    const result = performArithmeticOperations(5, 3, '-');
    expect(result).toBe(2);
  });

  it('should perform multiplication correctly', () => {
    const result = performArithmeticOperations(2, 3, '*');
    expect(result).toBe(6);
  });

  it('should perform division correctly', () => {
    const result = performArithmeticOperations(6, 3, '/');
    expect(result).toBe(2);
  });

  it('should throw an error for invalid operation', () => {
    expect(() => performArithmeticOperations(2, 3, '%')).toThrow('Invalid operation');
  });
});
