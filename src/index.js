const parser = require('./parser');

const compute = (phrase) => {
  const parsed = parser(phrase);
};

module.exports = {
  compute,
}

