import Memento from "./Memento";

export default class Gamer {
  private money: number = 0;
  private fruits: Array<string> = [];
  private static fruitsName: Array<string> = [
    'りんご', 'みかん', 'バナナ', 'ぶどう'
  ];

  constructor(money: number) {
    this.money = money;
  }
  public getMoney(): number {
    return this.money;
  }
  public bet(): void {
    const dice: number = Math.ceil(Math.random() * 6)
    if (dice === 1) {
      this.money += 100;
      console.log('所持金が増えました。');
    } else if (dice === 2) {
      this.money /= 2;
      console.log('所持金が半分になりました。');
    } else if (dice === 6) {
      const fruit = this.getFruit();
      this.fruits.push(fruit);
      console.log(`フルーツ（${fruit}）をもらいました。`);
    } else {
      console.log('何も起こりませんでした。');
    }
  }
  public createMemento(): Memento {
    const memento = new Memento(this.money);
    this.fruits.forEach(fruit => {
      if (fruit.indexOf('おいしい') > -1) {
        memento.addFruit(fruit);
      }
    })
    return memento;
  }
  public restoreMemento(memento: Memento): void {
    this.money = memento.getMoney();
    this.fruits = memento.getFruits();
  }
  public toString(): string {
    return `[money = ${this.money}, fruits = ${this.fruits.join(',')}]`;
  }
  getFruit(): string {
    let prefix: string = '';
    if (Math.floor(Math.random() * 2) === 0) {
      prefix = 'おいしい';
    }
    const fruitIndex = Math.floor(Math.random() * Gamer.fruitsName.length)
    return `${prefix}${Gamer.fruitsName[fruitIndex]}`
  }
}
