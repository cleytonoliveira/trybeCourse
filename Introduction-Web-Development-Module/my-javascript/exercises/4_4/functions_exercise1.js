function verificaPalindrome(word) {
  let arrayLetter = word.split("");
  let isPalindrome = true;
  for (let index in word) {
    if (arrayLetter[index] != word[(word.length - 1) - index]) {
      isPalindrome = false;
    }
  }
  return isPalindrome;
}


console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));