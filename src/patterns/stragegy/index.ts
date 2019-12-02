import WinningStrategy from './WinningStrategy';
import ProbStrategy from './ProbStrategy';
import Hand from './Hand';
import Player from './Player';

export default function () {
  const player1: Player = new Player('Taro', new WinningStrategy());
  const player2: Player = new Player('Hana', new ProbStrategy());

  for (let i = 0, len = 1000; i < len; i++) {
    const nextHand1: Hand = player1.nextHand();
    const nextHand2: Hand = player2.nextHand();
    if (nextHand1.isStrongerThan(nextHand2)) {
      console.log(`Winnder: ${player1.name}`);
      player1.win();
      player2.lose();
    } else if (nextHand2.isStrongerThan(nextHand1)) {
      console.log(`Winner: ${player2.name}`);
      player2.win();
      player1.lose();
    } else {
      console.log('Even...');
      player1.even();
      player2.even();
    }
  }

  console.log(`Total result:`);
  console.log(player1.toString());
  console.log(player2.toString());
}
