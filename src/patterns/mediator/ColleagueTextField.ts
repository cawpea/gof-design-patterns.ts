import IColleague from "./IColleague";
import IMediator from "./IMediator";

export default class ColleagueTextField implements IColleague {
  private mediator: IMediator | null = null;
  private name: string = '';
  private _text: string = '';

  constructor(name: string, text: string) {
    this.name = name;
    this._text = text;
  }
  get text (): string {
    return this._text;
  }
  set text (text: string) {
    this._text = text;
    this.textValueChanged();
  }
  public setMediator(mediator: IMediator): void {
    this.mediator = mediator;
  }
  public setColleagueEnabled(enabled: boolean): void {
    console.log(`[TextField] ${this.name}が[${enabled ? '有効' : '無効'}]になりました。`);
  }
  public textValueChanged () {
    if (!this.mediator) {
      return;
    }
    this.mediator.colleagueChanged();
  }
}
