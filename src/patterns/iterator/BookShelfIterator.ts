import IIterator from './IIterator';
import BookShelf from './BookShelf';
import Book from './Book';

export default class BookShelfIterator implements IIterator {
  private bookShelf: BookShelf;
  private index: number;

  constructor(bookshelf: BookShelf) {
    this.bookShelf = bookshelf;
    this.index = 0;
  }
  public hasNext(): boolean {
    return this.index < this.bookShelf.getLength()
  }
  public next(): object {
    const book: Book = this.bookShelf.getBookAt(this.index);
    this.index++;
    return book;
  }
}
