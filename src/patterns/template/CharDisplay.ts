import AbstractDisplay from './AbstractDisplay';

export default class CharDisplay extends AbstractDisplay {
  private text: string;
  constructor(text: string) {
    super();
    this.text = text;
  }
  protected open() {
    console.log('<<')
  }
  protected close() {
    console.log('>>')
  }
  protected print() {
    console.log(this.text);
  }
}
