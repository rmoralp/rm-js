import {expect} from 'chai'
import {objectToQueryString} from '../../src/string'

describe('[String#Method] objectToQueryString', function () {
  const object = {
    name: 'John',
    age: 30
  }
  const result = '?name=John&age=30'

  it('should convert object to query string functions correctly', function () {
      expect(objectToQueryString(object)).to.be.equal(result)
  })
})
