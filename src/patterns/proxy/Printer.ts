import IPrintable from "./IPrintable";

export default class Printer implements IPrintable {
  private name: string = '';
  
  constructor(name: string) {
    this.name = name;
  }
  public setPrinterName(name: string) {
    this.name = name;
  }
  public getPrinterName() {
    return this.name;
  }
  public async print(text: string) {
    await this.heavyJob('Printerのインスタンスを生成中');
    console.log(`==== ${this.name} ====`);
    console.log(text);
  }
  async heavyJob(message: string) {
    console.log(`==== ${message} ====`);
    for (let i = 0, len = 5; i < len; i++) {
      await new Promise(resolve => {
        setTimeout(() => {
          console.log('.')
          resolve();
        }, 1000);
      })
    }
    console.log('完了')
  }
}
