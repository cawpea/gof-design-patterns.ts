import Banner from './Banner';
import IPrint from './IPrint';

export default class PrintBanner extends Banner implements IPrint {
  constructor(text: string) {
    super(text);
  }
  public printWeak(): void {
    super.showWithParen();
  }
  public printStrong(): void {
    super.showWithAster();
  }
}
