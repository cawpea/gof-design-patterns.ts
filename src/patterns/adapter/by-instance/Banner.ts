export default class Banner {
  private text: string;
  constructor(text: string) {
    this.text = text;
  }
  public showWithParen(): void {
    console.log(`(${this.text})`);
  }
  public showWithAster(): void {
    console.log(`*${this.text}*`);
  }
}
