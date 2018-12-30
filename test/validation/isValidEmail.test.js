import {expect} from 'chai'
import {isValidEmail} from '../../src/validation'

describe('[Validation#Method] isValidEmail', function () {
  const EMAIL = 'rafamp89@gmail.com'
  const WRONG_EMAIL = 'name@again@example.com'
  
  it('should return true if email is valid', function () {
    expect(isValidEmail(EMAIL)).to.be.true
  })
  
  it('should return true if email is not valid', function () {
    expect(isValidEmail(WRONG_EMAIL)).not.to.be.true
  })
})
