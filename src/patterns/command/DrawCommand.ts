import ICommand from "./ICommand";
import IDrawable from "./IDrawable";

interface Point {
  x: number,
  y: number
}

export default class DrawCommand implements ICommand {
  protected drawable: IDrawable | null = null;
  private position: Point | null = null;

  constructor(drawable: IDrawable, position: Point) {
    this.drawable = drawable;
    this.position = position;
  }
  public execute() {
    if (!this.drawable || !this.position) {
      return;
    }
    this.drawable.draw(this.position.x, this.position.y);
  }
}
