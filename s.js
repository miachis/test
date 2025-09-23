function capitalize(str) {
  return str.replace(str[0], str[0].toUpperCase());
}

function reverseStr(str) {
  return str.split("").reverse().join("");
}

module.exports = {
  capitalize: capitalize,
  reverseStr: reverseStr,
};
