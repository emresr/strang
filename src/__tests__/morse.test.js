var { morse } = require('../string');

describe('Morse works correctly.', () => {
  test('Should return _ . ... _ for morse(test) ', () => {
    expect(morse('TEST')).toBe('_ . ... _');
  });
});

describe('Morse works correctly.', () => {
  test('Should return ._.. __ ._ ___ for morse(lmao) ', () => {
    expect(morse('lmao')).toBe('._.. __ ._ ___');
  });
});
