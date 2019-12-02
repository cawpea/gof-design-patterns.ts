import IPrintable from "./IPrintable";
import Printer from "./Printer";

export default class PrinterProxy implements IPrintable {
  private name: string;
  private real: Printer | null = null;
  
  constructor (name: string) {
    this.name = name;
  }
  public setPrinterName(name: string) {
    this.name = name;
  }
  public getPrinterName() {
    return this.name;
  }
  public print(text: string) {
    this.realize();
    if (this.real) {
      this.real.print(text);
    }
  }
  private realize() {
    if (this.real) {
      return
    }
    this.real = new Printer(this.name);
  }
}
