import IBuilder from './IBuilder';

export default class Director {
  private builder: IBuilder;
  constructor(builder: IBuilder) {
    this.builder = builder;
  }
  construct(): void {
    this.builder.makeTitle('これはタイトルです');
    this.builder.makeBody('これは本文です');
    this.builder.close();
  }
}
