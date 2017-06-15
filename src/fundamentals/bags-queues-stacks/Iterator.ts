import LinkNode from './LinkNode'

class ListIterator<T> implements Iterator<T> {
  private current: LinkNode<T>
  constructor (first) {
    this.current = new LinkNode<T>()
    this.current.next = first
  }
  public next (): IteratorResult<T> {
    let next = this.current.next
    this.current = next
    if (next) {
      return {
        done: false,
        value: next.item
      }
    } else {
      return {
        done: true,
        value: null
      }
    }
  }
}

export default ListIterator
