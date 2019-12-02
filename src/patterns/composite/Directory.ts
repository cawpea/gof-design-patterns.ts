import Entry from './Entry';

export default class Directory extends Entry {
  private name: string;
  private directory: Array<Entry> = [];

  constructor(name: string) {
    super();
    this.name = name;
  }
  public getName(): string {
    return this.name;
  }
  public getSize(): number {
    let size: number = 0;
    for (let i = 0, len = this.directory.length; i < len; i++) {
      const entry: Entry = this.directory[i];
      size += entry.getSize();
    }
    return size;
  }
  public add(entry: Entry): Entry {
    this.directory.push(entry);
    return this;
  }
  public printList(prefix: string): void {
    console.log(`${prefix}/${this.toString()}`);
    for (let i = 0, len = this.directory.length; i < len; i++) {
      const entry: Entry = this.directory[i];
      entry.printList(`${prefix}/${this.name}`);
    }
  }
}
