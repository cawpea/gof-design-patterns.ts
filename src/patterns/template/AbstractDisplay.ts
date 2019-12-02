export default class AbstractDisplay {
  protected open() {}
  protected print() {}
  protected close() {}
  public display() {
    this.open();
    for(let i = 0, len = 5; i < len; i++) {
      this.print();
    }
    this.close();
  }
}
