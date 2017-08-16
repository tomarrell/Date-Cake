const moment = require('moment');

const returnType = require('../constants/returnType');

const { command, commandMap } = require('../constants/command');
const { durationType, durationTypeMap } = require('../constants/durationType');
const baseDateMatcher = require('./baseDateMatcher');

const defaultParse = () => ({
  baseDate: moment(),
  command: null,
  commandParam: {},
  returnType: returnType.ISO,
});

const checkForCommand = (token, phraseObject) => {
  if (commandMap[token]) {
    phraseObject.command = commandMap[token];
  }
}

const checkForDuration = (token, phraseObject, { spaceSplit, index }) => {
  const num = parseInt(token, 10);
  if (!num) return;

  const nextToken = spaceSplit[index + 1];
  const type = durationTypeMap[nextToken];

  if (type) {
    spaceSplit[index] = undefined;
    phraseObject.commandParam[type] = num;
  }
}

// Main parsing method
const parser = (phrase) => {
  const parseObj = defaultParse();
  const cleanPhrase = phrase.replace(/[^a-zA-Z\d\s]/g, '');
  const spaceSplit = cleanPhrase.split(' ');

  spaceSplit.forEach((item, index) => {
    checkForCommand(item, parseObj);
    checkForDuration(item, parseObj, { spaceSplit, index });
  });

  parseObj.baseDate = baseDateMatcher.matchDate(cleanPhrase);

  return parseObj;
};

module.exports = parser;
