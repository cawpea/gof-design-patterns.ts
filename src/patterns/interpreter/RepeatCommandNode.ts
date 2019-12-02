import Node from './Node';
import Context from './Context';
import CommandListNode from './CommandListNode';

export default class RepeatCommandNode extends Node {
  private num: number | null = null;
  private commandListNode: Node | null = null;

  public parse(context: Context) {
    context.skipToken('repeat');
    this.num = context.currentNumber();
    context.nextToken();
    this.commandListNode = new CommandListNode();
    this.commandListNode.parse(context);
  }
  public toString(): string {
    if (!this.commandListNode) {
      return '';
    }
    return `[repeat ${this.num} ${this.commandListNode.toString()}]`;
  }
}
