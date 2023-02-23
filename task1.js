const deleteElementFromArray = (arr, elem) => {
  if (checkElemInArr(arr,elem)) {
    const indexElem = arr.indexOf(elem);
     const arrFiltered = arr.filter((el,i) =>{
             return i !== indexElem;   
    });
    return arrFiltered;
  }
  return arr;

  function checkElemInArr(arr,elem) {
    const result = arr.some((el) => el == elem);
    return result;
  }
};

