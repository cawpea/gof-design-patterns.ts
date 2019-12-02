import IState from "./IState";

export default interface IContext {
  setClock: (hour: number) => void;
  changeState: (state: IState) => void;
  callSecurtyCenter: (msg: string) => void;
  recordLog: (msg: string) => void;
}
