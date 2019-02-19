export const asyncPipe = (...funcs) => arg =>
  funcs.reduce((acc, value) => acc.then(value), Promise.resolve(arg))