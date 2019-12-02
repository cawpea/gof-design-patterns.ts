import IItem from './IItem';

export default abstract class Tray implements IItem {
  caption: string;
  tray: Array<IItem> = [];
  constructor(caption: string) {
    this.caption = caption;
  }
  add(child: IItem): void {
    this.tray.push(child);
  }
  abstract makeHTML(): HTMLElement;
}
