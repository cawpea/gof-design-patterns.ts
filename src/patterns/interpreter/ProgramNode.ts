import Node from './Node';
import Context from './Context';
import CommandListNode from './CommandListNode';

export default class ProgramNode extends Node {
  private commandListNode: Node | null = null;
  public parse(context: Context) {
    context.skipToken('program');
    this.commandListNode = new CommandListNode();
    this.commandListNode.parse(context);
  }
  public toString(): string {
    if (!this.commandListNode) {
      return '';
    }
    return `[program ${this.commandListNode.toString()}]`;
  }
}
