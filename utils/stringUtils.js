//Check if all chars in a string are uppercase
// input: type === string
//return: boolen
function checkIsUppercase(str) {
  if (str.length === 0 || typeof str !== "string" || /\s/.test(str))
    return false;
  return /[A-Z]/g.test(str);
}

module.exports = { checkIsUppercase };
