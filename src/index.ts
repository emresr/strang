import { number } from './number';
import { charToWords } from './char';
import { spell, morse, withNumbers } from './string';

console.log(morse('LMAO'));

module.exports = {
  spell,
  morse,
  number,
};
