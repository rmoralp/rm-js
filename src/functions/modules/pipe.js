export const pipe = (...funcs) => arg =>
  funcs.reduce((value, func) => func(value), arg)
