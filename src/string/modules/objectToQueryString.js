/**
 * @param {Object} obj
 * @return {String} - in format '?param=value&param2=value2'
 */
export function objectToQueryString(obj = {}) {
  const query = Object.keys(obj)
    .filter(key => obj[key] !== '' && obj[key] !== null)
    .map(key => key + '=' + obj[key])
    .join('&')
  return query.length > 0 ? '?' + query : null
}
