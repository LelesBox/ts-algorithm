import ListIterator from './Iterator'
import LinkNode from './LinkNode'

class Stack<T> implements Iterable<T> {
  private first: LinkNode<T> = null
  private N: number = 0
  public size (): number {
    return this.N
  }
  public isEmpty (): Boolean {
    return this.N === 0
  }
  public pop (): T{
    if (this.N > 0) {
      let first = this.first
      this.first = this.first.next
      this.N--
      return first.item
    }
    return null
  }
  public push (item: T): void {
    let node = new LinkNode<T>()
    node.item = item
    if (this.N === 0) {
      this.first = node
    } else {
      let old_first = this.first
      node.next = old_first
      this.first = node
    }
    this.N++
  }
  public [Symbol.iterator](): Iterator<T> {
    return new ListIterator<T>(this.first)
  }
}

export default Stack
