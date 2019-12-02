import IBigChar from "./bigchars/IBigChar";

export default class BigCharFactory {
  private pool: {
    '0': null | IBigChar,
    '1': null | IBigChar
  } = {
    '0': null,
    '1': null
  };
  private static singleton: BigCharFactory = new BigCharFactory();
  
  private constructor() {}
  public static getInstance (): BigCharFactory {
    return this.singleton;
  }
  public async getBigChar(charname: '0' | '1') {
    let bigChar: null | IBigChar = this.pool[charname]
    if (bigChar === null) {
      const charClass = await import(`./bigchars/Big${charname}`);
      bigChar = new charClass.default() as IBigChar;
      this.pool[charname] = bigChar
    }
    return bigChar.print();
  }
}
