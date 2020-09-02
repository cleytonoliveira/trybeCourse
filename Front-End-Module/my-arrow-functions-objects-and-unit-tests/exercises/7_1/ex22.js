const longestWord = word => {
  const biggestWord = word.split(' ');
  let counterWord = ''
  for (let index = 0; index < biggestWord.length; index += 1) {
    if (biggestWord[index].length > counterWord.length) {
      counterWord = biggestWord[index];
    }
  }
  return counterWord;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
