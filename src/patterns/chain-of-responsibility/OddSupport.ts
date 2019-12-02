import Support from './Support';
import Trouble from './Trouble';

export default class OddSupport extends Support {
  constructor(name: string) {
    super(name);
  }
  protected resolve(trouble: Trouble): boolean {
    return trouble.getNumber() % 2 === 1;
  }
}
