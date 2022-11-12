const REGEX_PATTERNS = {
  REACT_COMPONENT: /^[A-Z]\w+/,
  REACT_HOOK: /(use)[A-Z]\w+/,
  DEFAULT_STATE_VARIABLE: /^\$\w+/,
};

module.exports = REGEX_PATTERNS;
