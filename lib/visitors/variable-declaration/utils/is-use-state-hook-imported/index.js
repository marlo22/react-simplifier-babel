const { REACT_NAMES } = require('../../../../consts/names');

const isUseStateHookImported = (path, types) =>
  !!path.hub.file.ast.program.body.find((path) => {
    if (
      !types.isImportDeclaration(path) ||
      path.source.value !== REACT_NAMES.PACKAGE
    ) return;

    return !!path.specifiers?.find((path) => path.local.name === REACT_NAMES.USE_STATE_HOOK);
  });

module.exports = isUseStateHookImported;
