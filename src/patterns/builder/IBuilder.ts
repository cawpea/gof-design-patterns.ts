export default interface IBuilder {
  makeTitle: (title: string) => void;
  makeBody: (body: string) => void;
  close: () => void;
  getResult: () => string;
}
