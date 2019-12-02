import IState from "./IState";
import IContext from "./IContext";
import NightState from "./NightState";

export default class DayState implements IState {
  private static singleton: DayState = new DayState();
  private constructor () {}
  public static getInstance(): IState {
    return this.singleton;
  }
  public doClock(context: IContext, hour: number): void {
    if (hour < 9 || 17 <= hour) {
      context.changeState(NightState.getInstance());
    }
  }
  public doUse(context: IContext): void {
    context.recordLog('金庫使用(昼間)');
  }
  public doAlarm(context: IContext): void {
    context.callSecurtyCenter('非常ベル(昼間)');
  }
  public doPhone(context: IContext): void {
    context.callSecurtyCenter('通常の通話(昼間)')
  }
  public toString(): string {
    return '[昼間]';
  }
}