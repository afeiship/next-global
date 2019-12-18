# next-global
> Global property for next.

## installation
```bash
npm install -S @feizheng/next-global
```

## usage
```js
import '@feizheng/next-global';

nx.global(null);
nx.$global = { abc: 123 };
nx.$global = { 'c.d.e': 'test-str' };
```
