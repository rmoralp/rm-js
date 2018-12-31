import {expect} from 'chai'
import {parseQueryString} from '../../src/string'

describe.only('[String#Method] parseQueryString', function () {
  const queryString = '?name=John&age=30'
  const object = {
    name: 'John',
    age: '30'
  }

  it('should convert query string to json object', function () {
      expect(parseQueryString(queryString)).to.deep.equal(object)
  })
})
