import Book from './Book';
import IIterator from './IIterator';
import BookShelfIterator from './BookShelfIterator';

export default class BookShelf {
  private books: Book[] = [];
  private last: number = 0;
  
  public getBookAt(index: number): Book {
    return this.books[index];
  }
  public appendBook(book: Book): void {
    this.books.push(book);
  }
  public getLength(): number {
    return this.books.length;
  }
  public iterator(): IIterator {
    return new BookShelfIterator(this);
  }
}
