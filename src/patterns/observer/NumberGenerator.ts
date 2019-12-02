import IObserver from "./IObserver";

export default abstract class NumberGenerator {
  private observers: Array<IObserver> = [];

  public addObserver(observer: IObserver): void {
    this.observers.push(observer);
  }
  public deleteObserver(observer: IObserver): void {
    this.observers = this.observers.filter(o => o != observer);
  }
  public notifyObservers(): void {
    this.observers.forEach(o => o.update(this));
  }
  public abstract getNumber(): number;
  public abstract execute(): void;
}
