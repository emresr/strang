![Logo](https://user-images.githubusercontent.com/24278628/123002003-0cf9b000-d3ba-11eb-8ed5-684e3c7bd0be.png)

![npm](https://img.shields.io/npm/v/strang)

![NPM](https://img.shields.io/npm/l/strang)

![npm bundle size](https://img.shields.io/bundlephobia/min/strang)

#### A lightweight library for type conversion.

#### [Documentation](https://github.com/emresr/strang#readme)

## Usage

Install using npm or yarn:

```
npm install strang
# or
yarn add strang
```

Now you can start:

```
import { spell } from 'strang';

const spelled = spell("text")
```

| Function       | Description          |
| :------------- | :------------------- |
| **`spell()`**  | String to spell      |
| **`morse()`**  | String to morse code |
| **`number()`** | Number to numeral    |

```
  spell("LMAO") = "Lima Mike Alpha Oscar"
```

```
  morse("LMAO") = "._.. __ ._ ___"
```

```
  number(1234) = "One Thousand Two Hundred Thirty Four"
```

## Contribution

- Clone and edit the source as you wish.
- Please do not forget to add tests.
- Write a descriptive PR.

## License

MIT License

Copyright (c) 2021 Emre Surbahan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
