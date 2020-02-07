function isUnique(str) {
  return new Set(str).size === str.length;
}

function isUnique2(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) !== i) return false;
  }
  return true;
}
