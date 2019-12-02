export default class Memento {
  private money: number = 0;
  private fruits: Array<string> = [];

  constructor(money: number) {
    this.money = money;
  }
  public getMoney(): number {
    return this.money;
  }
  addFruit(fruit: string) {
    this.fruits.push(fruit);
  }
  getFruits(): Array<string> {
    return Object.assign([], this.fruits);
  }
}
