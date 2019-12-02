import Gamer from "./Gamer";
import Memento from "./Memento";

export default function () {
  const gamer: Gamer = new Gamer(100);
  let memento: Memento = gamer.createMemento();

  for (let i = 0, len = 100; i < len; i++) {
    console.log(`==== ${i}`);
    console.log(`現状: ${gamer.toString()}`);

    gamer.bet();

    console.log(`所持金は${gamer.getMoney()}円になりました。`);

    if (gamer.getMoney() > memento.getMoney()) {
      console.log(`(だいぶ増えたので、現在の状態を保存しておこう)`);
      memento = gamer.createMemento();
    } else if (gamer.getMoney() < memento.getMoney()) {
      console.log(`（だいぶ減ったので、以前の状態に復帰しよう）`);
      gamer.restoreMemento(memento);
    }
  }
}
