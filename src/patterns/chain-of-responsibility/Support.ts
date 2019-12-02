import Trouble from './Trouble';

export default abstract class Support {
  private name: string;
  private next: Support | null = null;
  constructor(name: string) {
    this.name = name;
  }
  public setNext(next: Support): Support {
    this.next = next;
    return this.next;
  }
  public support(trouble: Trouble): void {
    if (this.resolve(trouble)) {
      this.done(trouble);
    } else if (this.next) {
      this.next.support(trouble);
    } else {
      this.fail(trouble);
    }
  }
  public toString(): string {
    return `[${this.name}]`;
  }
  protected abstract resolve(trouble: Trouble): boolean;
  protected done(trouble: Trouble): void {
    console.log(`${trouble.toString()} is resolved by ${this.name}`);
  }
  protected fail(trouble: Trouble): void {
    console.log(`${trouble.toString()} cannot be resolved`);
  }
}
