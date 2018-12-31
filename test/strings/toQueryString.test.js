import {expect} from 'chai'
import {toQueryString} from '../../src/string'

describe('[String#Method] toQueryString', function () {
  const object = {
    name: 'John',
    age: 30
  }
  const result = '?name=John&age=30'

  it('should convert object to query string with default prefix', function () {
      expect(toQueryString(object)).to.be.equal(result)
  })

  it('should convert object to query string with forced prefix', function () {
    expect(toQueryString(object, true)).to.be.equal(result)
  })

  it('should convert object to query string without prefix', function () {
    expect(toQueryString(object, false)).to.be.equal(result.replace(/(^\?)/,''))
  })
})
