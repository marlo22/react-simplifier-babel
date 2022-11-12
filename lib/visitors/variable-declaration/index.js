const isUseStateHookImported = require('./utils/is-use-state-hook-imported');
const getHookSetterName = require('../../utils/get-hook-setter-name');

const { REACT_NAMES } = require('../../consts/names');
const REGEX_PATTERNS = require('../../consts/regex');

const VariableDeclarationVisitor = (types) => (path, state) => {
  // Omit variables with more (or less) than 1 declaration(s).
  if (path.node.declarations.length !== 1) return;

  const { id: variableDeclaratorId } = path.node.declarations[0];
  if (!types.isIdentifier(variableDeclaratorId)) return;

  // Check if the variable name match the state variable pattern.
  const variableName = variableDeclaratorId.name;
  const { stateVariablePattern } = state.opts;
  if (
    !variableName.match(stateVariablePattern || REGEX_PATTERNS.DEFAULT_STATE_VARIABLE)
  ) return;

  // Check if it's a hook or a component
  const parentFunction = path.getFunctionParent();
  if (
    (parentFunction.type === 'FunctionDeclaration' && !REGEX_PATTERNS.REACT_COMPONENT.test(parentFunction.node.id.name)) ||
    (parentFunction.type === 'ArrowFunctionExpression' && !REGEX_PATTERNS.REACT_COMPONENT.test(parentFunction.container.id.name))
  ) {
    return;
  }

  // Exit if it's a const variable.
  if (path.node.kind === 'const') return;

  // Import "useState" if it's not available.
  if (!isUseStateHookImported(path, types)) {
    const programBody = path.hub.file.ast.program.body;
    programBody.push(
      types.importDeclaration(
        [
          types.importSpecifier(
            types.identifier(REACT_NAMES.USE_STATE_HOOK),
            types.identifier(REACT_NAMES.USE_STATE_HOOK)
          )
        ], 
        types.stringLiteral(REACT_NAMES.PACKAGE)
      )
    );
  }
  
  // Replace the variable declaration with the hook initialization.
  const { name: declaratorName } = path.node.declarations[0].id;
  path.replaceWith(
    types.variableDeclaration(
      "const",
      [
        types.variableDeclarator(
          types.arrayPattern(
            [
              // TODO: check if a name was not declared before.
              types.identifier(declaratorName),
              types.identifier(getHookSetterName(declaratorName)),
            ]
          ),
          types.callExpression(
            types.identifier(REACT_NAMES.USE_STATE_HOOK),
            // Filter out falsy arguments
            [
              path.node.declarations[0].init
            ].filter(Boolean)
          )
        )
      ]
    )
  );
};

module.exports = VariableDeclarationVisitor;
