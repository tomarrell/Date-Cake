const command = {
  ADD: 'ADD',
  SUBTRACT: 'SUBTRACT',
};

const commandMap = {
  'add': command.ADD,
  'subtract': command.SUBTRACT,
  'remove': command.SUBTRACT,
};

module.exports = {
  command,
  commandMap,
};
