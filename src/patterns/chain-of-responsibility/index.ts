import Support from "./Support";
import NoSupport from "./NoSupport";
import LimitSupport from "./LimitSupport";
import SpecialSupport from "./SpecialSupport";
import OddSupport from "./OddSupport";
import Trouble from "./Trouble";

export default function () {
  const alice: Support = new NoSupport('Alice');
  const bob: Support = new LimitSupport('Bob', 100);
  const charlie: Support = new SpecialSupport('Charlie', 429);
  const diana: Support = new OddSupport('Diana');
  const fred: Support = new LimitSupport('Fred', 300);

  alice.setNext(bob).setNext(charlie).setNext(diana).setNext(fred)

  for (let i = 0, len = 500; i < len; i++) {
    alice.support(new Trouble(i));
  }
}
