import path from 'path';
import Link from './Link';
import Page from './Page';
import Tray from './Tray';

export default abstract class Factory {
  static async getFactory(name: string) {
    let factory: Factory | null = null;
    try {
      const module = await import(`../${name}`);
      factory = new module.default;
    } catch (error) {
      console.error(error);
    }
    return factory;
  }
  public abstract createLink(caption: string, url: string): Link;
  public abstract createTray(caption: string): Tray;
  public abstract createPage(title: string, author: string): Page;
}
