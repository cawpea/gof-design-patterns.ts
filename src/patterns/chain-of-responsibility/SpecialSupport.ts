import Support from './Support';
import Trouble from './Trouble';

export default class SpecialSupport extends Support {
  private num: number;
  constructor(name: string, num: number) {
    super(name);
    this.num = num;
  }
  protected resolve(trouble: Trouble): boolean {
    return trouble.getNumber() === this.num;
  }
}
