import Prototype from './Prototype';

export default class UnderlinePen implements Prototype {
  private underChar: string = '';
  constructor(underChar: string) {
    this.underChar = underChar;
  }
  use (mainText: string): void {
    let underStr: string = '';
    for (let i = 0, len = 10; i < len; i++) {
      underStr += this.underChar;
    }
    console.log(mainText);
    console.log(underStr);
  }
  createClone<UnderlinePen>(): UnderlinePen {
    return Object.create(this);
  }
}
