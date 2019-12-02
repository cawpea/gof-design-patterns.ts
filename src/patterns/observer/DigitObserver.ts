import IObserver from "./IObserver";
import NumberGenerator from "./NumberGenerator";

export default class DigitObserver implements IObserver {
  public update(generator: NumberGenerator): void {
    console.log(`DigitObserver: ${generator.getNumber()}`);
  }
}
