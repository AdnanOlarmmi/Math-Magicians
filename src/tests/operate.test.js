import operate from "../logic/operate";

describe("Test operate", () => {
    test('adds 1 + 2 to equal 3', () => {
    expect(operate(1, 2, '+')).toBe("3");
  });
  test('adds 1 + 2 to equal 3', () => {
    expect(operate(5, 1, '-')).toBe("4");
  });
  test('adds 1 + 2 to equal 3', () => {
    expect(operate(5, 5, 'x')).toBe("25");
  });
  test('adds 1 + 2 to equal 3', () => {
    expect(operate(16, 4, '÷')).toBe("4");
  });
})

