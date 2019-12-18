/*!
 * name: @feizheng/next-global
 * description: Global property for next.
 * url: https://github.com/afeiship/next-global
 * version: 1.0.0
 * date: 2019-12-18 19:07:32
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var DEFAULT_OPTIONS = {
    key: '$global',
    globalKey: '__$GLOBAL__'
  };

  nx.global = function(inInitialData, inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var globalKey = options.globalKey;
    nx[globalKey] = inInitialData || {};
    nx.defineProperty(nx, options.key, {
      set: function(inValue) {
        nx.each(inValue, function(key, value) {
          nx.set(nx[globalKey], key, value);
        });
      },
      get: function() {
        return nx[globalKey];
      }
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.global;
  }
})();

//# sourceMappingURL=next-global.js.map
