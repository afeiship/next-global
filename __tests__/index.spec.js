(function () {
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
  });
})();
