import Visitor from './IVisitor';

export default interface IElements {
  accept: (v: Visitor) => void;
}
