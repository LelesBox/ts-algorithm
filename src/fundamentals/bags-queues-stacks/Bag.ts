import ListIterator from './Iterator'
import LinkNode from './LinkNode'

class Bag<T> implements Iterable<T> {
  private first: LinkNode<T>
  public add(item: T): void {
    let oldfirst = this.first
    this.first = new LinkNode<T>()
    this.first.item = item
    this.first.next = oldfirst
  }
  public [Symbol.iterator](): Iterator<T> {
    return new ListIterator<T>(this.first)
  }
}

export default Bag
