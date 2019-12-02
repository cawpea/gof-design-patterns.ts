import File from './File';
import Directory from './Directory';

export default interface IVisitor {
  visit (entry: File | Directory): void;
}
