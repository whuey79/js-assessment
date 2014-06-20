if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
        constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
        var b = [];
    
        for (var a in obj) {
          if (obj.hasOwnProperty(a)) {
            b.push(a + ': ' + obj[a]);
          }
        }
        //alert(b);
        return b;
    }
  };
});
