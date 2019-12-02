import IContext from "./IContext";
import IState from "./IState";
import DayState from "./DayState";

type Button = {
  type: string;
  label: string;
}

export default class SafeFrame implements IContext {
  public buttonUse: Button = {type: 'use', label: '金庫使用'};
  public buttonAlarm: Button = {type: 'alarm', label: '非常ベル'};
  public buttonPhone: Button = {type: 'phone', label: '通常通話'};
  public buttonExit: Button = {type: 'exit', label: '終了'};
  private state: IState = DayState.getInstance();

  public actionPerformed(button: Button): void {
    switch(button.type) {
      case this.buttonUse.type:
        this.state.doUse(this);
        break;
      case this.buttonAlarm.type:
        this.state.doAlarm(this);
        break;
      case this.buttonPhone.type:
        this.state.doPhone(this);
        break;
      case this.buttonExit.type:
        console.log('exit');
        break;
      default:
        console.log('?');
        break;
    }
  }
  public setClock(hour: number): void {
    let clockString: string = '';
    if (hour < 10) {
      clockString = `0${hour}:00`;
    } else {
      clockString = `${hour}:00`;
    }
    console.log(`現在の時刻は${clockString}`);
    this.state.doClock(this, hour);
  }
  public changeState(state: IState) {
    console.log(`${this.state.toString()}から${state.toString()}に変わりました`);
    this.state = state;
  }
  public callSecurtyCenter(msg: string): void {
    console.log(`call! ${msg}`);
  }
  public recordLog(msg: string): void {
    console.log(`record... ${msg}`);
  }
}
