import ParseException from "./ParseException";

export default class Context {
  private tokens: Array<string> = [];
  private tokenIndex: number = -1;
  private currentToken: string | null = null;

  constructor(text: string) {
    this.tokens = text.split(' ');
    this.nextToken();
  }
  public nextToken(): string | null {
    if (this.tokens.length >= this.tokenIndex + 1) {
      this.currentToken = this.tokens[this.tokenIndex + 1];
      this.tokenIndex += 1;
    } else {
      this.currentToken = null;
    }
    return this.currentToken;
  }
  public getCurrentToken() {
    return this.currentToken;
  }
  public skipToken(token: string) {
    if (token !== this.currentToken) {
      throw new ParseException();
    }
    this.nextToken();
  }
  public currentNumber(): number {
    if (!this.currentToken) {
      return -1;
    }
    let number = 0;
    try {
      number = parseInt(this.currentToken);
    } catch (e) {
      throw new ParseException(e);
    }
    return number;
  }
}