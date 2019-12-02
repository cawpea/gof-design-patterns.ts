import Node from './Node';
import Context from './Context';
import ParseException from './ParseException';
import CommandNode from './CommandNode';

export default class CommandListNode extends Node {
  private list: Array<Node> = [];

  public parse(context: Context) {
    while (true) {
      if (context.getCurrentToken() === null) {
        throw new ParseException();
      } else if (context.getCurrentToken() === 'end') {
        context.skipToken('end');
        break;
      } else {
        const commandNode = new CommandNode();
        commandNode.parse(context);
        this.list.push(commandNode);
      }
    }
  }
  public toString(): string {
    return this.list.toString();
  }
}
