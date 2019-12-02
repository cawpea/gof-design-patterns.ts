import MacroCommand from "./MacroCommand";
import DrawCommand from "./DrawCommand";
import DrawCanvas from "./DrawCanvas";

export default function () {
  const history: MacroCommand = new MacroCommand();
  const canvas: DrawCanvas = new DrawCanvas(history);

  console.log('=== Drawing ===');
  for (let i = 0, len = 5; i < len; i++) {
    const randomPoint = {
      x: Math.floor(Math.random() * 100),
      y: Math.floor(Math.random() * 100),
    };
    const command = new DrawCommand(canvas, randomPoint);
    history.append(command);
    command.execute();
  }

  console.log('=== Undo ===');
  history.undo();
  history.execute();

  console.log('=== Clear ===');
  history.clear();
  history.execute();
}
