import IElement from './IElement';
import Visitor from './IVisitor';

export default abstract class Entry implements IElement {
  public abstract getName(): string;
  public abstract getSize(): number;
  public abstract accept(v: Visitor): void;
  public add(entry: Entry): void {
    throw new Error('Entry can not use this function');
  }
  public toString(): string {
    return `${this.getName()}(${this.getSize()})`;
  }
}
