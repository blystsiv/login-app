import { factorial } from './factorial';

// edge cases: 0 , 1
// happy path -> 5 -> 120 +  3 > 6
// not happy path ->

// test === it
describe('Factorial util', () => {
  describe('', () => {
    test('return 1 if pass 1', () => {
      expect(factorial(1)).toEqual(1);
    });
  });

  test('return 1 if pass 0', () => {
    expect(factorial(0)).toEqual(1);
  });

  test('return 120 if pass 5', () => {
    expect(factorial(5)).toEqual(120);
  });

  test('return false if pass null', () => {
    expect(factorial(null as any)).toEqual(false);
  });

  test('return false if pass negative number', () => {
    expect(factorial(-1)).toEqual(false);
    expect(factorial(-3)).toEqual(false);
  });

  test('return error if pass undefined', () => {
    expect(() => {
      // @typescript-eslint/ban-ts-comment
      return factorial(undefined as any);
    }).toThrow(new Error('Number should be defined'));
  });

  test("return error if pass 'string'", () => {
    expect(() => {
      return factorial('' as any);
    }).toThrow(new Error('Argument should be a number'));
  });
});
