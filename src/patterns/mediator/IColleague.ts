import IMediator from "./IMediator";

export default interface IColleague {
  setMediator: (mediator: IMediator) => void;
  setColleagueEnabled: (enabled: boolean) => void;
}
