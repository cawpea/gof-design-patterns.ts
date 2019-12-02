import Builder from './IBuilder';

export default class TextBuilder implements Builder {
  private messages: string = '';
  makeTitle(title: string): void {
    this.messages += `==========================\n`;
    this.messages += `title: ${title}\n`;
    this.messages += `==========================\n`;
  }
  makeBody(body: string): void {
    this.messages += `------------ Body start ------------\n`;
    this.messages += `${body}\n`;
    this.messages += `------------ Body End ------------\n`;
  }
  close(): void {
    this.messages += 'That is all.';
  }
  getResult(): string {
    return this.messages;
  }
}
