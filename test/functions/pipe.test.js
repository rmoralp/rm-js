import {expect} from 'chai'
import {pipe} from '../../src/functions'

const add1 = x => x + 1;

describe('[Function#Method] pipe', function () {
    it('should pipe functions correctly', function () {
        expect(pipe(add1, add1, add1)(1)).to.be.equal(4)
    })
})
