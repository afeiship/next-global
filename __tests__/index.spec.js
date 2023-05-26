require('../src');

describe('api.basic test', () => {
  test('setValue', function () {
    // initial:
    nx.global(null);
    // set or set by path:
    nx.$global = { abc: 123 };
    expect(nx.get(nx.$global, 'abc')).toBe(123);
  });

  test('setByPath', function () {
    // initial:
    nx.global(null);
    // set or set by path:
    nx.$global = { 'c.d.e': 'test-str' };
    expect(nx.get(nx.$global, 'c.d')).toEqual({ e: 'test-str' });
  });

  test('a new context, not nx', function () {
    const ctx = {};
    nx.global({ name: 'aric' }, { context: ctx });
    // get value from context
    expect(nx.$global).toEqual({ name: 'aric' });

    // set value to context
    nx.$global = { age: 108 };
    expect(nx.$global).toEqual({ name: 'aric', age: 108 });
  });
});
