const moment = require('moment');

const { naturalSplit } = require('../split');
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
const checkForDuration = (token, phraseObject, { splitPhrase, index }) => {
  const num = parseInt(token, 10);
  if (!num) return;

  const nextToken = splitPhrase[index + 1];
  const type = durationTypeMap[nextToken];
  if (type) {
    phraseObject.commandParam[type] = num;
  }
}
const checkForDate = (token, phraseObject) => {
  
}

const parser = (phrase) => {
  const spaceSplit = phrase.split(' ');
  const parsedPhrase = {
    baseDate: moment(),
    command: null,
    commandParam: {},
    returnType: returnType.ISO,
  }

  splitPhrase.forEach((item, index) => {
    checkForCommand(item, parsedPhrase); 
    checkForDuration(item, parsedPhrase, { splitPhrase, index });
  });

  console.log(parsedPhrase);
  return parsedPhrase;
};

module.exports = parser;
