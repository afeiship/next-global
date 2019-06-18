var nx = require('next-js-core2');
require('../src/next-global');

test('nx.global set/get value', function() {
  nx.global(null);
  nx.$global = { abc: 123 };
  nx.$global = { 'c.d.e': 'test-str' };
  expect(nx.$global).toEqual({ abc: 123, c: { d: { e: 'test-str' } } });
});
