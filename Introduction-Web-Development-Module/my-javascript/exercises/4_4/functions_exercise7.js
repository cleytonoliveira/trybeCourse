function verifyEndName(firstName, secondName) {
  let verifyFirstName = firstName.split("");
  let verifySecondName = secondName.split("");
  for (let index = 0; index < firstName.length; index += 1) {
    if (verifyFirstName[verifyFirstName.length - verifySecondName.length - index] != verifySecondName[index]) {
      return false;
    }
    return true;
  }
}
console.log(verifyEndName("trybe", "be"));
console.log(verifyEndName("joaofernando", "fernan"));
