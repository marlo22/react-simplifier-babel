const handleAssignmentOperator = require('./utils/handle-assignment-operator');
const handleMathematicalOverwriteOperators = require('./utils/handle-mathematical-overwrite-operators');

const REGEX_PATTERNS = require('../../consts/regex');

const AssignmentExpressionVisitor = (types) => (path, state) => {
  const { stateVariablePattern } = state.opts;

  if (
    !path.node.left.name?.match(stateVariablePattern || REGEX_PATTERNS.DEFAULT_STATE_VARIABLE)
  ) return;

  switch (path.node.operator) {
    case '=':
      return handleAssignmentOperator(path, types);
    case '+=':
      return handleMathematicalOverwriteOperators(path, types, '+');
    case '-=':
      return handleMathematicalOverwriteOperators(path, types, '-');
    case '*=':
      return handleMathematicalOverwriteOperators(path, types, '*');
    case '/=':
      return handleMathematicalOverwriteOperators(path, types, '/');
    case '**=':
      return handleMathematicalOverwriteOperators(path, types, '**');
    case '%=':
      return handleMathematicalOverwriteOperators(path, types, '%');
    case '&=':
      return handleMathematicalOverwriteOperators(path, types, '&');
    case '|=':
      return handleMathematicalOverwriteOperators(path, types, '|');
    case '^=':
      return handleMathematicalOverwriteOperators(path, types, '^');
  }
};

module.exports = AssignmentExpressionVisitor;
