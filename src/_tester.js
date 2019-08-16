const isFutureDate = require('./isFutureDate');

const now = new Date();
const year = now.getUTCFullYear();
const month = now.getUTCMonth() + 1; // Buffer the date as January is 0
const date = now.getUTCDate() - 1;
const time = `${year}-${month}-${date}`;

isFutureDate(time);
