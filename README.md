# next-global
> Global property for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-global
```

## usage
```js
import '@jswork/next-global';

nx.global(null);
nx.$global = { abc: 123 };
nx.$global = { 'c.d.e': 'test-str' };
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-global/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-global
[version-url]: https://npmjs.org/package/@jswork/next-global

[license-image]: https://img.shields.io/npm/l/@jswork/next-global
[license-url]: https://github.com/afeiship/next-global/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-global
[size-url]: https://github.com/afeiship/next-global/blob/master/dist/next-global.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-global
[download-url]: https://www.npmjs.com/package/@jswork/next-global
