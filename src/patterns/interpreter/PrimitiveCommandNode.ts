import Node from './Node';
import Context from './Context';
import ParseException from './ParseException';

export default class PrimitiveCommandNode extends Node {
  private name: string | null = null;
  public parse(context: Context) {
    this.name = context.getCurrentToken();
    if (!this.name) {
      return;
    }
    context.skipToken(this.name);
    if (['go', 'right', 'left'].indexOf(this.name) === -1) {
      throw new ParseException();
    }
  }
  public toString(): string {
    if (!this.name) {
      return '';
    }
    return this.name;
  }
}
