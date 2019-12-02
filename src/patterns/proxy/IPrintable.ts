export default interface IPrintable {
  setPrinterName: (name: string) => void;
  getPrinterName: () => string;
  print: (text: string) => void;
}
