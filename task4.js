const ERROR_PARAM_ARR =
  'В getUniqArray был передан невалидный параметр. Аргумент arrдолжен быть массивом чисел';

const getUniqArray = (arr) => {
  if (isDigits(arr)) {
    return arr.filter((elem, i) => {
      return i === arr.indexOf(elem);
    });
  }
  throw new Error(ERROR_PARAM_ARR);

function isDigits(arr) {
  let res = arr.every((elem) => typeof elem === 'number' && !Number.isNaN(elem));
  return res;
}
};