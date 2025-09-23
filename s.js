function capitalize(str) {
  return str.replace(str[0], str[0].toUpperCase());
}

function reverseStr(str) {
  return str.split("").reverse().join("");
}

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};

module.exports = {
  capitalize: capitalize,
  reverseStr: reverseStr,
  calculator: calculator,
};
