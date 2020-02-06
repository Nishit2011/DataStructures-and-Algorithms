function reverseOrderofWordsInSentence(sentence) {
  var arr = sentence.split(" ");
  var sortedArr = arr.reverse();

  return sortedArr.join(" ");
}

reverseOrderofWordsInSentence("A dog is an animal");

//Solution 2:
function reverseOrderofWordsInSentence2(sen) {
  var temp = [];
  var arr = sen.split(" ");
  for (var i = arr.length - 1; i >= 0; i--) {
    temp.push(arr[i]);
  }

  return temp.join(" ");
}

reverseOrderofWordsInSentence2("A dog is an animal");
