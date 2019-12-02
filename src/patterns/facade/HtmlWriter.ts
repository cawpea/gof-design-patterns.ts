export default class HtmlWriter {
  private htmlString: string = '';
  public title(title: string): void {
    this.htmlString += `
    <html>
      <head>
        <title>${title}</title>
      </head>
      <body>
        <h1>${title}</h1>
    `
  }
  public paragraph(message: string): void {
    this.htmlString += `
        <p>${message}</p>
    `
  }
  public link(href: string, caption: string): void {
    this.htmlString += `
        <a href="${href}" target="_blank">${caption}</a>
    `
  }
  public close(): void {
    this.htmlString += `
      </body>
    </html>
    `
  }
  public getHtml() {
    return this.htmlString
  }
}
