export default interface Prototype {
  use: (...args: any[]) => void;
  createClone: <T>() => T;
}
