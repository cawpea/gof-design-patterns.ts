import NumberGenerator from "./NumberGenerator";
import RandomNumberGenerator from "./RandomNumberGenerator";
import IObserver from "./IObserver";
import DigitObserver from "./DigitObserver";
import GraphObserver from "./GraphObserver";

export default function () {
  const generator: NumberGenerator = new RandomNumberGenerator();
  const observer1: IObserver = new DigitObserver();
  const observer2: IObserver = new GraphObserver();

  generator.addObserver(observer1);
  generator.addObserver(observer2);
  generator.execute();
}
