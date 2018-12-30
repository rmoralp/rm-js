import {expect} from 'chai'
import {isValidBankAccount} from '../../src/validation'

describe('isValidBankAccount', function () {
    const BANK_ACCOUNT = 'ES7921000813610123456789'
    const FAKE_BANK_ACCOUNT = 'ES7921000813610123450000'

    it('should return true if IBAN is valid', function () {
        expect(isValidBankAccount(BANK_ACCOUNT)).to.be.true
    })

    it('should return false if IBAN is not valid', function () {
        expect(isValidBankAccount(FAKE_BANK_ACCOUNT)).not.to.be.true
    })
})
