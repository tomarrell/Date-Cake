const { expect } = require('chai');
const moment = require('moment');

const { compute }  = require('../src');

// Phrases
// add 20 days to March 2nd
// add 20 days and 24 hours to March 2nd
// add 2 weeks to March 2nd
// what is 2m 23d 5h subtracted from 18/08/2017
// what day will it be 20d from Jan 5

describe('End to End', () => {
  it('should add 20 days to text date', () => {
    const underTest = 'add 20 days to March 2nd';
    const march2 = moment.utc('2017-03-02T00:00:00.000Z');

    expect(compute(underTest)).to.equal(
      march2.add(20, 'days').toISOString()
    );
  });

  it('should add 20 days and 24 hours to text date', () => {
    const underTest = 'add 20 days and 24 hours to March 2nd';
    const march2 = moment.utc('2017-03-02T00:00:00.000Z');

    expect(compute(underTest)).to.equal(
      march2.add(20, 'days').add(24, 'hour').toISOString()
    );
  });

  it('should add 1 year, 2 months, 20 days and 24 hours to text date', () => {
    const underTest = 'add 1 year, 2 months, 20 days and 24 hours to March 2nd';
    const march2 = moment.utc('2017-03-02T00:00:00.000Z');

    expect(compute(underTest)).to.equal(
      march2.add(20, 'days').add(24, 'hour').toISOString()
    );
  });

  it('should add 2 weeks to text date', () => {
    const underTest = 'add 2 weeks to March 2nd';
    const march2 = moment.utc('2017-03-02T00:00:00.000Z');

    expect(compute(underTest)).to.equal(
      march2.add(2, 'weeks').toISOString()
    );
  });

  it('should be able to subtract time from xx/xx/xx format', () => {
    const underTest = 'what is 2m 23d 5h subtracted from 18/08/2017';
    const august18 = moment.utc('2017-08-18T00:00:00.000Z');

    expect(compute(underTest)).to.equal(
      august18.subtract(2, 'months')
        .subtract(23, 'days')
        .subtract(5, 'hours')
        .toISOString()
    );
  });

  it('should be able to return the day after adding to date', () => {
    const underTest = 'what day will it be 20d from Jan 5';
    const jan5 = moment.utc('2017-01-05T00:00:00.000Z');

    expect(compute(underTest)).to.equal(jan5.add(20, 'days').format('dddd'));
  });
});


