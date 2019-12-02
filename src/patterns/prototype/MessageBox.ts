import Prototype from './Prototype';

export default class MessageBox implements Prototype {
  private decochar: string;
  constructor(decochar: string) {
    this.decochar = decochar;
  }
  use(mainText: string): void {
    let decostr: string = '';
    for(let i = 0, len = 5; i < len; i++) {
      decostr += this.decochar;
    }
    console.log(decostr);
    console.log(mainText);
    console.log(decostr);
  }
  createClone<MessageBox>(): MessageBox {
    return Object.create(this);
  }
}
