const getHookSetterName = require('../../../../utils/get-hook-setter-name');

const handleMathematicalOverwriteOperators = (path, types, operator) => {
  const prevValueIdentifier = types.identifier('prevValue')

  path.replaceWith(
    types.expressionStatement(
      types.callExpression(
        types.identifier(getHookSetterName(path.node.left.name)),
        [
          types.arrowFunctionExpression(
            [prevValueIdentifier],
            types.binaryExpression(
              operator,
              prevValueIdentifier,
              path.node.right
            )
          )
        ]
      )
    )
  );
};

module.exports = handleMathematicalOverwriteOperators;
