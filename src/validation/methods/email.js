import {EMAIL_REGEX} from '../../regex/index'

/**
 * @param {String} value
 * @return {boolean}
 */
export function isValidEmail(value = '') {
  return EMAIL_REGEX.test(value)
}
