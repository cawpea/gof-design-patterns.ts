import IObserver from "./IObserver";
import NumberGenerator from "./NumberGenerator";

export default class GraphObserver implements IObserver {
  public update(generator: NumberGenerator): void {
    console.log('GraphObserver:');
    const count: number = generator.getNumber();
    let graph: string = '';
    for(let i = 0; i < count; i++) {
      graph += '*';
    }
    console.log(graph);
  }
}
