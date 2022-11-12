const getHookSetterName = require('../../../../utils/get-hook-setter-name');

const handleAssignmentOperator = (path, types) => {
  path.replaceWith(
    types.expressionStatement(
      types.callExpression(
        types.identifier(getHookSetterName(path.node.left.name)),
        [path.node.right]
      )
    )
  );
};

module.exports = handleAssignmentOperator;
