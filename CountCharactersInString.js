function count(string) {
  let charMap = {};
  for (let char of string)
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }

  return charMap;
}
