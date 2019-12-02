import IStrategy from './IStrategy';
import Hand from './Hand';

export default class ProbStrategy implements IStrategy {
  private prevHandValue: number = 0;
  private currentHandValue: number = 0;
  private history: number[][] = [
    [1,1,1],
    [1,1,1],
    [1,1,1],
  ];
  
  public nextHand(): Hand {
    const bet: number = this.getRandom();
    let handValue: number = 0;

    if (bet < this.history[this.currentHandValue][0]) {
      handValue = 0;
    } else if (bet < this.history[this.currentHandValue][1]) {
      handValue = 1;
    } else {
      handValue = 2;
    }
    this.prevHandValue = this.currentHandValue;
    this.currentHandValue = handValue;
    return Hand.getHand(handValue);
  }
  public study(win: boolean): void {
    if (win) {
      this.history[this.prevHandValue][this.currentHandValue]++;
    } else {
      this.history[this.prevHandValue][(this.currentHandValue + 1) % 3]++;
      this.history[this.prevHandValue][(this.currentHandValue + 2) % 3]++;
    }
  }
  private getRandom(): number {
    return Math.floor(Math.random() * this.getSum(this.currentHandValue));
  }
  private getSum(handValue: number): number {
    return this.history[handValue].reduce((acc, value) => {
      acc += value;
      return acc;
    }, 0);
  }
}
