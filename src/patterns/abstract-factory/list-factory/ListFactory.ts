import ListLink from './ListLink';
import ListPage from './ListPage';
import ListTray from './ListTray';
import Factory from '../factory/Factory';

export default class ListFactory extends Factory {
  public createLink(caption: string, url: string) {
    return new ListLink(caption, url);
  }
  public createTray(caption: string) {
    return new ListTray(caption);
  }
  public createPage(title: string, author: string) {
    return new ListPage(title, author);
  }
}
