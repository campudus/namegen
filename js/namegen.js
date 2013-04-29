var nameGen = (function() {
  var nameGenFromArray = function(names) {
    var name = '', i = 0, l = names.length;
    while (i < l) {
      name = name + names[i][(Math.floor(Math.random() * names[i].length))];
      i = i + 1;
    }

    return name;
  };

  var generateFromMultiDimensionalArray = function(dimensions, names) {
    var x = Math.floor(Math.random() * names.length);
    var dims = dimensions - 1;
    if (dims <= 1) {
      return nameGenFromArray(names[x]);
    } else {
      return generateFromMultiDimensionalArray(dims, names[x]);
    }
  };

  var generator = {
    fromArray : nameGenFromArray,
    fromHigherArray : generateFromMultiDimensionalArray
  };

  return generator;
}());

if (typeof module !== 'undefined') {
  module.exports = nameGen;
}
