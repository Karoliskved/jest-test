export function add(a, b) {
  return a + b;
}
export function capitalize(string) {
  string = string[0].toUpperCase() + string.slice(1);

  return string;
}
export function reverseString(string) {
  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  return reversed;
}
export const calculator = {
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
export function caesarCipher(string) {
  const regex = /[A-Za-z]/;
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (regex.test(string[i])) {
      let newCharCode;
      if (string[i].charCodeAt() > 96) {
        newCharCode = ((string[i].charCodeAt() + 1 - 97) % 26) + 97;
      } else {
        newCharCode = ((string[i].charCodeAt() + 1 - 65) % 26) + 65;
      }

      result += String.fromCharCode(newCharCode);
    } else {
      result += string[i];
    }
  }
  return result;
}

export function analyzeArray(array) {
  let obj = {};
  obj.average = array.reduce((a, b) => a + b, 0) / array.length;
  obj.min = Math.min(...array);
  obj.max = Math.max(...array);
  obj.length = array.length;
  return obj;
}
