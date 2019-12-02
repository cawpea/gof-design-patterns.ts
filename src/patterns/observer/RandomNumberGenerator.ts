import NumberGenerator from "./NumberGenerator";

export default class RandomNumberGenerator extends NumberGenerator {
  private num: number = -1;
  
  public getNumber(): number {
    return this.num;
  }
  public execute(): void {
    for (let i = 0; i < 20; i++) {
      this.num = Math.random() * 50;
      this.notifyObservers();
    }
  }
}
