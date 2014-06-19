if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      for ( var i =0; i<arr.length; i++) {
        if ( arr[i] === item) {
          return i;
        }      
      }
      return -1;
    },

    sum : function(arr) {
      var sum = 0;
      for ( var i =0; i<arr.length; i++) {
        sum+=arr[i];
      }      
      return sum;
    },

    remove : function(arr, item) {
      var newarr = [];
      
      for (var i = 0; i< arr.length; i++) {
        if (arr[i] !== item) {
          newarr.push(arr[i]);
        }
      }
      return newarr;
    },

    removeWithoutCopy : function(arr, item) {
      for (var i = 0; i< arr.length; i++) {
        if (arr[i] === item) {
          arr.splice(i,1);
          i--;
        }
      }
      return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    prepend : function(arr, item) {
       arr.unshift(item);
       return arr;
    },

    curtail : function(arr) {
      if ( arr.length > 0) {
        arr.shift();
      }
      return arr;
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      arr.splice(index,0,item);
      return arr;
    },

    count : function(arr, item) {
      var counter = 0;
      for (var i =0;i<arr.length;i++) {
        if (arr[i] === item) {
          counter++;
        }
      }
      return counter;
    },

    duplicates : function(arr) {
        var b = [];
        var dupe;
        var check;
          
        for (var i=0; i<arr.length-1; i++) {
          dupe = false;
          for (var j=i+1; j< arr.length; j++) {
            if (arr[i] == arr[j]) {
              dupe = true;
              arr.splice(j,1);
              j--;
            }
          }
          if (dupe) { b.push(arr[i]);}
        }    
        return b;
    },

    square : function(arr) {
      for (var i = 0; i<arr.length; i++) {
        arr[i] = arr[i] * arr[i];
      }
      return arr;
    },

    findAllOccurrences : function(arr, target) {
      var b = [];
      for (var i=0; i<arr.length; i++) {
        if ( arr[i] === target) {
          b.push(i);
        }
      }
      return b;
    }
  };
});
