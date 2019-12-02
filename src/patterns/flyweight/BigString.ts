import BigCharFactory from "./BigCharFactory";

export default class BigString {
  private bigchars: Array<string> = [];

  public async setBigChars(chars: string) {
    const factory: BigCharFactory = BigCharFactory.getInstance();
    for (let i = 0, len = chars.length; i < len; i++) {
      const char = chars[i]
      if (char === '0' || char === '1') {
        this.bigchars[i] = await factory.getBigChar(char);
      }
    }
  }
  public print(): void {
    this.bigchars.forEach(char => {
      console.log(char);
    })
  }
}
