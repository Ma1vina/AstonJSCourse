function sum(a, b) {
  let result = +a + +b;
  if (Number.isInteger(result)) {
    return result;
  }
  return Number(result.toFixed(3));
};
