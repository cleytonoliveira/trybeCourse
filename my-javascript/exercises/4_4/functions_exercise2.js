function searchIndex(number) {
  let bigValue = 0;
  for (let index in number) {
    if (number[index] > number[bigValue]) {
      bigValue = index; 
    }
  }
  console.log(bigValue);
}

searchIndex([2, 3, 6, 7, 10, 1]);
