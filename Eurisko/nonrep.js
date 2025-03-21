
firstNonRepeatingChar("Eurisko"); // "u"
firstNonRepeatingChar("team"); // "t"
function firstNonRepeatingChar(str) {
  let charCount = {};
  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]]) {
      charCount[str[i]]++;
    } else {
      charCount[str[i]] = 1;
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]] === 1) {
      return str[i];
    }
  }
  return null;
}
console.log(firstNonRepeatingChar("Eurisko"));
console.log(firstNonRepeatingChar("team"));