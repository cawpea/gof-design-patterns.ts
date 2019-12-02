import Border from './Border';
import Display from './Display';

export default class SideBorder extends Border {
  private char: string;
  constructor(display: Display, char: string) {
    super(display);
    this.char = char;
  }
  public getColumns(): number {
    return this.getRowText(0).length;
  }
  public getRows(): number {
    return this.display.getRows();
  }
  public getRowText(row: number): string {
    return `${this.char}${this.display.getRowText(row)}${this.char}`;
  }
}
