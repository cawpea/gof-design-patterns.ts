import Border from './Border';

export default class FullBorder extends Border {
  public getColumns(): number {
    return 1 + this.display.getColumns() + 1;
  }
  public getRows(): number {
    return 1 + this.display.getRows() + 1;
  }
  public getRowText(row: number): string {
    if (row === 0 || row === this.display.getRows() + 1) {
      return `+${this.makeLine('-')}+`;
    }
    return `| ${this.display.getRowText(row - 1)} |`;
  }
  private makeLine(char: string) {
    let line = '';
    for (let i = 0, len = this.getColumns(); i < len; i++) {
      line += char;
    }
    return line;
  }
}