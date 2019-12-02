import IColleague from "./IColleague";
import IMediator from "./IMediator";

export default class ColleagueCheckbox implements IColleague {
  private mediator: IMediator | null = null;
  private name: string = '';
  private _checked: boolean = false;

  constructor(name: string, checked: boolean) {
    this.name = name;
    this._checked = checked;
  }
  get checked(): boolean {
    return this._checked;
  }
  set checked(checked: boolean) {
    this._checked = checked;
    this.itemStateChanged();
  }
  public setMediator(mediator: IMediator): void {
    this.mediator = mediator;
  }
  public setColleagueEnabled(enabled: boolean): void {
    console.log(`[Checkbox ${this.name}]が[${enabled ? '有効' : '無効'}]になりました。`);
  }
  public itemStateChanged() {
    if (!this.mediator) {
      return;
    }
    this.mediator.colleagueChanged();
  }
}
