import { expect } from 'chai'
import 'mocha'
import Stack from '../Stack'

describe('测试stack', function () {
  it('stack 基础接口', () => {
    let stack = new Stack<String>()
    let strs = 'lee,boox,asd,123,dfds,qwe,123,asdf,asdwd'.split(',')
    expect(stack.isEmpty()).to.eq(true)
    strs.forEach(s => stack.push(s))
    expect(stack.size()).to.eq(strs.length)
    for (let value of stack) {
      expect(value).to.eq(strs.pop())
    }
    // pop
    strs = 'lee,boox,asd,123,dfds,qwe,123,asdf,asdwd'.split(',')
    for (let i = stack.size() - 1; i >= 0; i--) {
      let item = stack.pop()
      expect(item).to.eq(strs[i])
    }
  })
})