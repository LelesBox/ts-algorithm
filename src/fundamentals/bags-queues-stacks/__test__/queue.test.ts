import { expect } from 'chai'
import 'mocha'
import Queue from '../Queue'

describe('Test Queue', () => {
  it('测试queue队列数据结构，先进先出', () => {
    let queue = new Queue<String>()
    let strs = 'lee,boox,asd,123,dfds,qwe,123,asdf,asdwd'.split(',')
    expect(queue.isEmpty()).to.eq(true)
    // enqueue
    strs.forEach((s) => queue.enqueue(s))
    expect(queue.size()).to.eq(strs.length)
    // 迭代
    for (let value of queue) {
      expect(value).to.eq(strs.shift())
    }
    // dequeue
    strs = 'lee,boox,asd,123,dfds,qwe,123,asdf,asdwd'.split(',')
    for (let i = 0, l = queue.size(); i < l; i++) {
      let item = queue.dequeue()
      expect(item).to.eq(strs[i])
    }
  })
})
