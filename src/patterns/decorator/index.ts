import Display from './Display';
import StringDisplay from './StringDisplay';
import SideBorder from './SideBorder';
import FullBorder from './FullBorder';

export default function () {
  const d1: Display = new StringDisplay('Hello world');
  const d2: Display = new SideBorder(d1, '#');
  const d3: Display = new FullBorder(d2);
  const d4: Display = new SideBorder(
    new FullBorder(
      new SideBorder(
        new StringDisplay('Decorator Pattern')
      , '*')
    )
  , '-');

  d1.show();
  d2.show();
  d3.show();
  d4.show();
}
