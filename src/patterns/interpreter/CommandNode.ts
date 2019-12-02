import Node from './Node';
import Context from './Context';
import RepeatCommandNode from './RepeatCommandNode';
import PrimitiveCommandNode from './PrimitiveCommandNode';

export default class CommandNode extends Node {
  private node: Node | null = null;

  public parse(context: Context) {
    if (context.getCurrentToken() === 'repeat') {
      this.node = new RepeatCommandNode();
      this.node.parse(context);
    } else {
      this.node = new PrimitiveCommandNode();
      this.node.parse(context);
    }
  }
  public toString(): string {
    if (!this.node) {
      return '';
    }
    return this.node.toString();
  }
}
