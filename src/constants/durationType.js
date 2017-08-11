const durationType = {
  SECOND: 'SECOND',
  MINUTE: 'MINUTE',
  HOUR: 'HOUR',
  DAY: 'DAY',
  WEEK: 'WEEK',
  FORTNIGHT: 'FORTNIGHT',
  MONTH: 'MONTH',
  YEAR: 'YEAR',
  DECADE: 'DECADE',
};

const durationTypeMap = {
  'second': durationType.SECOND,
  'seconds': durationType.SECOND,
  's': durationType.SECOND,

  'minute': durationType.MINUTE,
  'minutes': durationType.MINUTE,
  'min': durationType.MINUTE,
  'mins': durationType.MINUTE,
  'm': durationType.MINUTE,

  'hour': durationType.HOUR,
  'hours': durationType.HOUR,
  'hr': durationType.HOUR,
  'hrs': durationType.HOUR,
  'h': durationType.HOUR,

  'day': durationType.DAY,
  'days': durationType.DAY,
  'd': durationType.DAY,

  'week': durationType.WEEK,
  'weeks': durationType.WEEK,
  'wk': durationType.WEEK,
  'wks': durationType.WEEK,
  'w': durationType.WEEK,

  'fortnight': durationType.FORTNIGHT,
  'fortnights': durationType.FORTNIGHT,
  'ftn': durationType.FORTNIGHT,
  'f': durationType.FORTNIGHT,

  'month': durationType.MONTH,
  'months': durationType.MONTH,
  'mon': durationType.MONTH,
  'M': durationType.MONTH,

  'year': durationType.YEAR,
  'years': durationType.YEAR,
  'yr': durationType.YEAR,
  'yrs': durationType.YEAR,
  'y': durationType.YEAR,

  'decade': durationType.DECADE,
  'decades': durationType.DECADE,
};

module.exports = {
  durationType,
  durationTypeMap,
};
