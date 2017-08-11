const moment = require('moment');

const { monthRegex } = require('../constants/regex');
const returnType = require('../constants/returnType');
const { command, commandMap } = require('../constants/command');
const { durationType, durationTypeMap } = require('../constants/durationType');

const checkForCommand = (token, phraseObject) => {
  if (commandMap[token]) {
    phraseObject.command = commandMap[token];
  }
}
const checkForReturnType = (token, phraseObject) => {
}
const checkForDuration = (token, phraseObject, { spaceSplit, index }) => {
  const num = parseInt(token, 10);
  if (!num) return;

  const nextToken = spaceSplit[index + 1];
  const type = durationTypeMap[nextToken];
  if (type) {
    spaceSplit.splice(index, index);
    phraseObject.commandParam[type] = num;
  }
}
const checkForDate = (token, phraseObject) => {
  const match = monthRegex.exec(token);
  console.log(match);
}

const parser = (phrase) => {
  const spaceSplit = phrase.split(' ');
  const parsedPhrase = {
    baseDate: moment(),
    command: null,
    commandParam: {},
    returnType: returnType.ISO,
  }

  spaceSplit.forEach((item, index) => {
    checkForCommand(item, parsedPhrase);
    checkForDuration(item, parsedPhrase, { spaceSplit, index });
    checkForDate(item, parsedPhrase);
  });

  // console.log(spaceSplit);
  // console.log(parsedPhrase);
  return parsedPhrase;
};

module.exports = parser;
