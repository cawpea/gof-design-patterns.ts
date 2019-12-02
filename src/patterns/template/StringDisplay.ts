import AbstractDisplay from './AbstractDisplay';

export default class StringDisplay extends AbstractDisplay {
  private text: string;
  constructor(text: string) {
    super();
    this.text = text;
  }
  protected open() {
    console.log('----- open -----')
  }
  protected close() {
    console.log('----- close -----')
  }
  protected print() {
    console.log(this.text)
  }
  public printLine() {
    this.open();
    this.print();
    this.close();
  }
}
