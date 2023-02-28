function getNumberRadix(number, radix) {
  let correctNumb = +number;
  let correctRadix = +radix;
  if (
    typeof correctNumb == "number" && !Number.isNaN(correctNumb) &&
    correctNumb > 0 &&
    Number.isInteger(correctNumb)
  ) {
    if (
      typeof correctRadix == "number" && !Number.isNaN(correctRadix) &&
      correctRadix >= 2 &&
      correctRadix <= 16 &&
      Number.isInteger(correctRadix)
    ) {
      return correctNumb.toString(correctRadix);
    }
  }
  throw new Error(
    "Функция getNumberRadix была вызвана с некорректными параметрами"
  );
};
