import Display from './Display';

export default class StringDisplay extends Display {
  private text: string;
  constructor(text: string) {
    super();
    this.text = text;
  }
  public getColumns(): number {
    return this.text.length;
  }
  public getRows(): number {
    return 1;
  }
  public getRowText(row: number): string {
    if (row === 0) {
      return this.text;
    }
    return '';
  }
}
