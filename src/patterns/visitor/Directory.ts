import Entry from './Entry';
import Visitor from './IVisitor';

export default class Directory extends Entry {
  private name: string;
  private dir: Array<Entry> = [];

  constructor(name: string) {
    super();
    this.name = name;
  }
  public add(entry: Entry): void {
    this.dir.push(entry);
  }
  public getName(): string {
    return this.name;
  }
  public getSize(): number {
    let size: number = 0;
    const it: Iterator<Entry> = this.iterator();
    let result: IteratorResult<Entry> | null = null;
    while(result === null || !result.done) {
      result = it.next();
      if (result.value) {
        size += result.value.getSize();
      }
    }
    return size;
  }
  public iterator(): Iterator<Entry> {
    const iterator = () => {
      let index: number = 0;
      return {
        next: (): IteratorResult<Entry> => {
          const entry = this.dir[index];
          index++;
          return {
            done: this.dir.length <= index,
            value: entry
          }
        }
      }
    }
    return iterator();
  }
  public accept(v: Visitor): void {
    v.visit(this);
  }
}
