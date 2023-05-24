import nx from '@jswork/next';

const defaults = {
  key: '$global',
  globalKey: '__$GLOBAL__'
};

nx.global = function (inInitialData, inOptions) {
  var options = nx.mix(null, defaults, inOptions);
  var globalKey = options.globalKey;
  nx[globalKey] = inInitialData || {};
  nx.defineProperty(nx, options.key, {
    set: function (inValue) {
      nx.each(inValue, function (key, value) {
        nx.set(nx[globalKey], key, value);
      });
    },
    get: function () {
      return nx[globalKey];
    }
  });
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  // uniapp3 + vite will throw error
  module.exports = nx.global;
}

export default nx.global;
