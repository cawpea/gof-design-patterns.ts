import IDrawable from "./IDrawable";
import MacroCommand from "./MacroCommand";

export default class DrawCanvas implements IDrawable {
  private history: MacroCommand | null = null;

  constructor(history: MacroCommand) {
    this.history = history;
  }
  public paint() {
    if (!this.history) {
      return;
    }
    this.history.execute();
  }
  public draw(x: number, y: number) {
    console.log(`Draw to [${x}, ${y}] point`);
  }
}
