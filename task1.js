function deepCopyObject(obj) {
  if (obj) {
    if (isArr(obj)) {
      return obj.map((elem) => {
        return deepCopyObject(elem);
      });
    }
    if (isObj(obj)) {
      let copyObj = {};
      for (let key in obj) {
        copyObj[key] = deepCopyObject(obj[key]);
      }
      return copyObj;
    }
  }
  return obj;
}

function isObj(obj) {
  return typeof obj === 'object' && obj != null;
}

function isArr(obj) {
  return Array.isArray(obj);
}


