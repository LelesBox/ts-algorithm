import { expect } from 'chai'
import 'mocha'
import Bag from '../Bag'

describe('Test Bag', () => {
  it('可添加数据，并支持迭代', () => {
    let bag = new Bag<String>()
    let strs = 'lee,boox,asd,123,dfds,qwe,123,asdf,asdwd'.split(',')
    strs.forEach((s) => bag.add(s))
    for (let value of bag) {
      expect(value).to.eq(strs.pop())
    }
  })
})
