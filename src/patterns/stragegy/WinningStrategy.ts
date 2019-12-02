import IStrategy from './IStrategy';
import Hand from './Hand';

export default class WinningStrategy implements IStrategy {
  private won: boolean = false;
  private prevHand: Hand | null = null;

  private getRandom(): number {
    return Math.floor(Math.random() * 3);
  }
  public nextHand(): Hand {
    if (!this.won || !this.prevHand) {
      this.prevHand = Hand.getHand(this.getRandom());
    }
    return this.prevHand;
  }
  public study(win: boolean): void {
    this.won = win;
  }
}
