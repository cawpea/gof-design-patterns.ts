import Hand from './Hand';

export default interface IStrategy {
  nextHand: () => Hand;
  study: (win: boolean) => void;
}
