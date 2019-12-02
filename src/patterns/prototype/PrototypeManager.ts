import Prototype from './Prototype';

export default class PrototypeManager {
  private showcase: { [name: string]: Prototype } = {};
  public register(name: string, proto: Prototype): void {
    this.showcase[name] = proto;
  }
  public create<T>(name: string): T {
    if (!this.showcase.hasOwnProperty(name)) {
      throw Error(`PrototypeManager has not prototype of ${name}`)
    }
    return this.showcase[name].createClone();
  }
}
