import IDisplayImpl from './IDisplayImpl';

export default class Display {
  private displayImpl: IDisplayImpl;
  constructor(displayImpl: IDisplayImpl) {
    this.displayImpl = displayImpl;
  }
  open(): void {
    this.displayImpl.rawOpen();
  }
  print(): void {
    this.displayImpl.rawPrint();
  }
  close(): void {
    this.displayImpl.rawClose();
  }
  display(): void {
    this.open();
    this.print();
    this.close();
  }
}
