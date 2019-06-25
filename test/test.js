var nx = require('next-js-core2');
require('../src/next-global');

describe('Basic test', () => {
  test('nx.global set/get value', () => {
    // init global:
    nx.global(null);
    nx.$global = { abc: 123 };
    nx.$global = { 'c.d.e': 'test-str' };
    expect(nx.$global).toEqual({ abc: 123, c: { d: { e: 'test-str' } } });
  });

  test('nx.global create other globalKey property', () => {
    // init global:
    nx.global(null, { globalKey: '__MYGOD__', key: '$god' });
    nx.$god = { abc: 123 };
    nx.$god = { 'c.d.e': 'test-str' };
    expect(nx.$god).toEqual({ abc: 123, c: { d: { e: 'test-str' } } });
  });
});
