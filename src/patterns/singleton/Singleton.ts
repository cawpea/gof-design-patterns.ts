export default class Singleton {
  private static singleton: Singleton = new Singleton();
  private num: number = 0;
  private constructor() {
    if (Singleton.singleton) {
      console.error('Singletonクラスは複数生成できません')
    }
  }
  public static getInstance(): Singleton {
    return this.singleton;
  }
  public  increment(): number {
    this.num++;
    return this.num;
  }
}
