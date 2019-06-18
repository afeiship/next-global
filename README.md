# next-global
> Global property for next

## installation
```bash
npm install -S afeiship/next-global --registry=https://registry.npm.taobao.org
```

## usage
```js
import 'next-global';

nx.global(null);
nx.$global = { abc: 123 };
nx.$global = { 'c.d.e': 'test-str' };
```
