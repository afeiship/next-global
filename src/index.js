import nx from '@jswork/next';

const defaults = {
  key: '$global',
  globalKey: '__$GLOBAL__',
  context: nx
};

nx.global = function (inInitialData, inOptions) {
  var options = nx.mix(null, defaults, inOptions);
  var globalKey = options.globalKey;
  var ctx = options.context;
  ctx[globalKey] = inInitialData || {};

  nx.defineProperty(nx, options.key, {
    set: function (inValue) {
      nx.each(inValue, function (key, value) {
        nx.set(ctx[globalKey], key, value);
      });
    },
    get: function () {
      return ctx[globalKey];
    }
  });
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  // uniapp3 + vite will throw error
  module.exports = nx.global;
}

export default nx.global;
