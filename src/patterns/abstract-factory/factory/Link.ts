import IItem from './IItem';

export default abstract class Link implements IItem {
  caption: string;
  url: string;
  constructor(caption: string, url: string) {
    this.caption = caption;
    this.url = url;
  }
  abstract makeHTML(): HTMLElement;
}
