import BigString from "./BigString";

export default async function () {
  const bigString: BigString = new BigString();
  await bigString.setBigChars('0101');
  bigString.print();
}
