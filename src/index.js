const isArray = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Array]';
};

const recursivelyLowercaseJSONKeys = (obj) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  if (isArray(obj)) {
    return obj.map(o => recursivelyLowercaseJSONKeys(o));
  }
  return Object.keys(obj).reduce((prev, curr) => {
    prev[curr.toLowerCase()] = recursivelyLowercaseJSONKeys(obj[curr]);
    return prev;
  }, {});
};

module.exports = recursivelyLowercaseJSONKeys;
