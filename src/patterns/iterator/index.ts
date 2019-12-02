import BookShelf from "./BookShelf";
import Book from "./Book";
import IIterator from "./IIterator";

export default function () {
  const bookShelf: BookShelf = new BookShelf();
  bookShelf.appendBook(new Book('Around the world'));
  bookShelf.appendBook(new Book('Bible'));
  bookShelf.appendBook(new Book('Cinderella'));
  
  const iterator: IIterator = bookShelf.iterator();
  while(iterator.hasNext()) {
    console.log(iterator.next())
  }
}
