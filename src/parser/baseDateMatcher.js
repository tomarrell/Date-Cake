const moment = require('moment');

const { MONTH_DATE_YEAR } = require('../constants/regex/dateFormats');

const matchDate = (phrase) => {
  const match = MONTH_DATE_YEAR.exec(phrase);
  console.log(match);
};

module.exports = {
  matchDate,
};

