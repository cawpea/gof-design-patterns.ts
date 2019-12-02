import Database from './Database';
import HtmlWriter from './HtmlWriter';

export default class PageMaker {
  private constructor() {}
  public static makeWelcomePage(dbname: string) {
    const db = Database.getProperties(dbname);
    const writer = new HtmlWriter();
    writer.title('This is title');
    writer.paragraph('This is paragraph');
    writer.link(db.email, db.name);
    writer.close();
    console.log(writer.getHtml());
  }
}
