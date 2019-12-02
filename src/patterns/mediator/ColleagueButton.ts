import IColleague from './IColleague';
import IMediator from './IMediator';

export default class ColleagueButton implements IColleague {
  private mediator: IMediator | null = null;
  private caption: string = '';
  constructor(caption: string) {
    this.caption = caption;
  }
  public setMediator(mediator: IMediator): void {
    this.mediator = mediator;
  }
  public setColleagueEnabled(enabled: boolean): void {
    console.log(`[Button ${this.caption}]は[${enabled ? '有効' : '無効'}]になりました。`);
  }
}
