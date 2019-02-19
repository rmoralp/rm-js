import {expect} from 'chai'
import {asyncPipe} from '../../src/functions'

const add1 = async x => x + 1;

describe('[Function#Method] asyncPipe', () => {
    it('should pipe async functions correctly', async () => {
        const result = await asyncPipe(add1, add1, add1)(1)
        expect(result).to.be.equal(4)
    })
})
