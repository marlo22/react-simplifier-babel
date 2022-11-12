const HOOK_SETTER_PREFIX = '____set';

const getHookSetterName = (stateVariableName) => HOOK_SETTER_PREFIX + stateVariableName;

module.exports = getHookSetterName;
