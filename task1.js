Array.prototype.filterArray = function (cb, thisArg) {
  let context = this;
  const res = [];
  for (let i = 0; i < context.length; i++) {
    if (!cb.call(thisArg, context[i], i, context)) continue;
      res.push(context[i]);
  }
  return res;
};
