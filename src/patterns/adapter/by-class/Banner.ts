export default class Banner {
  private text: string;
  constructor(text: string) {
    this.text = text;
  }
  protected showWithParen(): void {
    console.log(`(${this.text})`);
  }
  protected showWithAster(): void {
    console.log(`*${this.text}*`);
  }
}
