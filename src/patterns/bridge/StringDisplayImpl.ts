import IDisplayImpl from './IDisplayImpl';

export default class StringDisplayImpl implements IDisplayImpl {
  private text: string;
  private width: number;
  constructor(text: string) {
    this.text = text;
    this.width = this.text.length;
  }
  rawOpen(): void {
    this.printLine();
  }
  rawPrint(): void {
    console.log(this.text);
  }
  rawClose(): void {
    this.printLine();
  }
  printLine(): void {
    let lineStr = '';
    for(let i = 0; i < this.width; i++) {
      lineStr += '-';
    }
    console.log(lineStr);
  }
}
