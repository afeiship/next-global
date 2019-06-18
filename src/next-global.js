(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.global = function(inInitialData) {
    nx.__$GLOBAL__ = inInitialData || {};
    nx.defineProperty(nx, '$global', {
      set: function(inValue) {
        nx.each(inValue, function(key, value) {
          nx.set(nx.__$GLOBAL__, key, value);
        });
      },
      get: function() {
        return nx.__$GLOBAL__;
      }
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.global;
  }
})();
