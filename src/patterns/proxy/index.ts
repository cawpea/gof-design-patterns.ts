import IPrintable from "./IPrintable";
import PrinterProxy from "./PrinterProxy";

export default function () {
  const printer: IPrintable = new PrinterProxy('Alice');
  console.log(`名前は現在${printer.getPrinterName()}です。`);
  printer.setPrinterName('Bob');
  console.log(`名前は現在${printer.getPrinterName()}です。`);
  printer.print('Hello World.');
}
