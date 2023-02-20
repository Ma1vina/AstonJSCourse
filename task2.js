const ERROR_PARAMS_ARR =
  'В функцию getInterval были переданы невалидные параметры. Параметр arr должен содержать только числовые значения';
const ERROR_PARAM_FROM =
  'В функцию getInterval были переданы невалидные параметры. Параметр from должен быть числом';
const ERROR_PARAM_TO =
  'В функцию getInterval были переданы невалидные параметры. Параметр to должен быть числом';

function getInterval(arr, from, to) {
  if (!isDigits(arr)) {
    throw new Error(ERROR_PARAMS_ARR);
  }
  if (typeof from !== 'number') {
    throw new Error(ERROR_PARAM_FROM);
  }
  if (typeof to !== 'number') {
    throw new Error(ERROR_PARAM_TO);
  }
  return getFromTo(arr, from, to);
}

function isDigits(arr) {
  let res = arr.every((elem) => typeof elem === 'number');
  return res;
}

function getFromTo(arr, from, to) {
  let result = [];
  arr.forEach((el) => {
    if ((el >= to && el <= from) || (el >= from && el <= to)) {
      result.push(el);
    }
  });
  return result;
}
