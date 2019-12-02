import ICommand from "./ICommand";

export default class MacroCommand implements ICommand {
  private commands: Array<ICommand> = [];

  public execute() {
    this.commands.forEach(command => {
      command.execute();
    });
  }
  public append(command: ICommand) {
    if (command === this) {
      return;
    }
    this.commands.push(command);
  }
  public undo() {
    if (this.commands.length === 0) {
      return;
    }
    this.commands.pop();
  }
  public clear() {
    this.commands = [];
  }
}
