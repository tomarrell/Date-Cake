const {
  command,
} = require('../constants');

const parser = () => {
  return {
    command: command.ADD,
    baseDate: new Date(),
    commandParam: {
      second: null,
      minute: null,
      hour: null,
      day: null,
      week: null,
      fortnight: null,
      month: null,
      year: null,
      decade: null,
    },
    returnType: return.ISO,
  }
};

module.export = () => {
  return true;
};
