const isFutureDate = require('./src/isFutureDate');
const getURLParams = require('./src/getURLParams');
const getActualMonth = require('./src/getActualMonth');
const quickSortArray = require('./src/quickSortArray');
const querySelectorArray = require('./src/querySelectorArray');
const isString = require('./src/strings/isString');

module.exports = {
  isFutureDate,
  getURLParams,
  getActualMonth,
  quickSortArray,
  querySelectorArray,
  strings: {
    isString
  }
};
