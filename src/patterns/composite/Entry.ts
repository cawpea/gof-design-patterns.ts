export default abstract class Entry {
  public abstract getName(): string;
  public abstract getSize(): number;
  public add(entry: Entry): Entry {
    throw Error(`${entry} can not add to File`);
  }
  public abstract printList(prefix: string): void;
  public toString(): string {
    return `${this.getName()}（${this.getSize()}）`;
  }
}
