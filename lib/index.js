const VariableDeclarationVisitor = require('./visitors/variable-declaration');
const AssignmentExpressionVisitor = require('./visitors/assignment-expression');

module.exports = ({ types }) => ({
  visitor: {
    VariableDeclaration: VariableDeclarationVisitor(types),
    AssignmentExpression: AssignmentExpressionVisitor(types),
  }
});
