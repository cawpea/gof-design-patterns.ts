import IBigChar from "./IBigChar";

export default class Big0 implements IBigChar {
  print (): string {
    return `
    ....####....
    ..##....##..
    ..##....##..
    ..##....##..
    ..##....##..
    ....####.... 
    `;
  }
}
