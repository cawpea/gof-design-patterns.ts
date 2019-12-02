import IItem from './IItem';

export default abstract class Page {
  title: string;
  author: string;
  content: Array<IItem> = [];
  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
  add(item: IItem): void {
    this.content.push(item);
  }
  output(): void {
    const $wrapper = this.makeHTML();
    document.body.appendChild($wrapper);
    console.log('output page', $wrapper);
  }
  abstract makeHTML(): HTMLElement;
}
