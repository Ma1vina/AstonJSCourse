const addElementsToArray = (arr, index) => {
  return function getNewArr(...elems) {
    if (isValidIndex(index)) {
      if (index > arr.length || index === undefined) {
        return [...arr, ...elems];
      }
      const copyArr = [...arr];
      copyArr.splice(index, 0, ...elems);
      return copyArr;
    }
    throw new Error(
      'The index cannot be a negative number or a fractional number'
    );
  };

  function isValidIndex(index) {
    return (
      (index >= 0 && Number.isInteger(index) && typeof index === 'number') ||
      index === undefined
    );
  }
};
