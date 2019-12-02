import Display from './Display';

export default class CountDisplay extends Display {
  multiDisplay(count: number = 1): void {
    this.open();
    for (let i = 0; i < count; i++) {
      this.print();
    }
    this.close();
  }
}
