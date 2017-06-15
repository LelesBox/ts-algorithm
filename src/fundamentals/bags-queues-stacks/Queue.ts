import ListIterator from './Iterator'
import LinkNode from './LinkNode'

class Queue<T> implements Iterable<T> {
  private first: LinkNode<T>
  private last: LinkNode<T>
  private N: number = 0
  constructor () {
    this.first = this.last = new LinkNode<T>()
  }
  public isEmpty (): Boolean {
    return this.N === 0
  }
  public size (): Number {
    return this.N
  }
  public enqueue (item: T): void {
    let oldNode = this.last
    this.last = new LinkNode<T>()
    this.last.item = item
    if (this.isEmpty()) {
      this.first = this.last
    } else {
      oldNode.next = this.last
    }
    this.N++
  }
  public dequeue(): T {
    if (this.isEmpty()) {
      return null
    }
    this.N--
    let first = this.first
    this.first = first.next
    let item: T = first.item
    first = null
    return item
  }
  public [Symbol.iterator](): Iterator<T> {
    return new ListIterator<T>(this.first)
  }
}

export default Queue
