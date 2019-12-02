import IBuilder from './IBuilder';

export default class HtmlBuilder implements IBuilder {
  private messages: string = '';
  makeTitle(title: string): void {
    this.messages += `<h1>${title}</h1>`;
  }
  makeBody(body: string): void {
    this.messages += `<p>${body}</p>`;
  }
  close(): void {
    this.messages += `<p>That is all.<p>`;
  }
  getResult(): string {
    return this.messages;
  }
}
