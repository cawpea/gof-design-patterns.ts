import Display from './Display';
import CountDisplay from './CountDisplay';
import StringDisplayImpl from './StringDisplayImpl';

export default function() {
  const d1 = new Display(new StringDisplayImpl('d1'));
  const d2 = new CountDisplay(new StringDisplayImpl('d2'));
  console.log(d1.display());
  console.log(d2.display());
  console.log(d2.multiDisplay(3));
}
