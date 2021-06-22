var { number } = require('../number');

describe('Number to numerals works correctly.', () => {
  test('should return One Hundred Twenty Three for number(123)', () => {
    expect(number(123)).toBe('One Hundred Twenty Three');
  });
});
