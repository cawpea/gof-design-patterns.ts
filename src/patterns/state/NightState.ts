import IState from "./IState";
import IContext from "./IContext";
import DayState from "./DayState";

export default class NightState implements IState {
  private static singleton: NightState = new NightState();
  private constructor() {}
  public static getInstance(): IState {
    return this.singleton;
  }
  public doClock(context: IContext, hour: number): void {
    if (9 <= hour && hour < 17) {
      context.changeState(DayState.getInstance());
    }
  }
  public doUse(context: IContext): void {
    context.callSecurtyCenter('非常：夜間の金庫使用！');
  }
  public doAlarm(context: IContext): void {
    context.callSecurtyCenter('非常ベル(夜間)');
  }
  public doPhone(context: IContext): void {
    context.recordLog('夜間の通話録音');
  }
  public toString(): string {
    return '[夜間]';
  }
}
