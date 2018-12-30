/**
 * Calculates the modulo of a number
 * @param {String} number
 * @param {String} divisor
 * @return {string}
 */
function modulo(number, divisor) {
  let parts = Math.ceil(number.length / 7)
  let remain = ''

  for (let i = 1; i <= parts; i++) {
    remain = String(
      parseFloat(remain + number.substr((i - 1) * 7, 7)) % divisor
    )
  }

  return remain
}

/**
 * @param {String} value
 * @return {boolean}
 */
export function isValidBankAccount(value = '') {
  let newIban = value
    .toUpperCase()
    .trim()
    .replace(/\s/g, '')

  if (newIban.search(/^[A-Z]{2}/gi) < 0) {
    return false
  }

  // Move first 4 characters to end
  newIban = newIban.substring(4) + newIban.substring(0, 4)
  // Replace letters with numbers
  newIban = newIban.replace(/[A-Z]/g, match => match.charCodeAt(0) - 55)

  return parseInt(modulo(newIban, 97), 10) === 1
}
