// const monthRegex = /jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/;
const monthRegex = `(jan(?:uary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:tember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)`;
const dateRegex = `(\\b\\d{1,2}(\\b|(?=st\\b)|(?=nd\\b)))`;
const yearRegex = `(\\b\\d{4}\\b)`;

// [month] [date] [year]
const MONTH_DATE_YEAR = `${monthRegex} ?${dateRegex}? ?${yearRegex}?`;
console.log(MONTH_DATE_YEAR);

module.exports = {
  MONTH_DATE_YEAR: new RegExp(MONTH_DATE_YEAR, 'i'),
};

