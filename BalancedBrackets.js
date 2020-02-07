function balancedBrackets(str) {
  let openStack = [];
  let open = "({[";
  let closed = ")}]";
  let matches = {
    "(": ")",
    "{": "}",
    "[": "]"
  };

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    //if it's an open bracket, push it into stack
    if (open.includes(char)) {
      openStack.push(char);

      //if it's a closed bracket, pop out a bracket from open stack
    } else if (closed.includes(char)) {
      let lastOpenBrackets = openStack.pop();

      // If the open and close bracket don't match, return false
      if (matches[char] !== lastOpenBrackets) {
        return false;
      }
    }
  }
  // Ensures there are no characters left on the stack
  return !openStack.length;
}
