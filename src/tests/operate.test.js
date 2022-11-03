import operate from '../logic/operate';

describe('Test operate', () => {
  test('add 1 and 2 to equal 3', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });
  test('subtract 1 from 5 to equal 4', () => {
    expect(operate(5, 1, '-')).toBe('4');
  });
  test('multiply 5 by 5 to equal 25', () => {
    expect(operate(5, 5, 'x')).toBe('25');
  });
  test('divide 16 by 4 to equal 4', () => {
    expect(operate(16, 4, '÷')).toBe('4');
  });
});
