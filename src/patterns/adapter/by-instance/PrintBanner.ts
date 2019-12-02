import Print from './Print';
import Banner from './Banner';

export default class PrintBanner extends Print {
  private banner: Banner;
  constructor(text: string) {
    super();
    this.banner = new Banner(text);
  }
  public printWeak(): void {
    this.banner.showWithParen();
  }
  public printStrong(): void {
    this.banner.showWithAster();
  }
}
