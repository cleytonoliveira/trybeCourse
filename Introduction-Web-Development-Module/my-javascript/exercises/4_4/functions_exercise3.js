function searchIndex(number) {
  let leastValue = 0;
  for (let index in number) {
    if (number[index] < number[leastValue]) {
      leastValue = index; 
    }
  }
  console.log(leastValue);
}

searchIndex([2, 4, 6, 7, 10, 0, -3]);
