import Display from './Display';

export default abstract class Border extends Display {
  protected display: Display;
  constructor(display: Display) {
    super();
    this.display = display;
  }
}
