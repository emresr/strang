var { number } = require('../number');

describe('Number to numerals works correctly.', () => {
  test('should return One Hundred Twenty Three for number(123)', () => {
    expect(number(123)).toBe('One Hundred Twenty Three');
  });
});
describe('Number to numerals works correctly.', () => {
  test('should return Zero for number(0)', () => {
    expect(number(0)).toBe('Zero');
  });
});
describe('Number to numerals works correctly.', () => {
  test('should return One Hundred for number(100)', () => {
    expect(number(100)).toBe('One Hundred');
  });
});
describe('Number to numerals works correctly.', () => {
  test('should return Fifty Two for number(52)', () => {
    expect(number(52)).toBe('Fifty Two');
  });
});
