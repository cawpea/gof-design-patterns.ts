import Node from "./Node";
import ProgramNode from "./ProgramNode";
import Context from "./Context";

const miniProgram = 'program repeat 4 repeat 3 go right go left end right end end';

export default function () {
  console.log(`text = ${miniProgram}`);
  const node: Node = new ProgramNode();
  node.parse(new Context(miniProgram));
  console.log(`node = ${node}`);
}
