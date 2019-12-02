import CharDisplay from './CharDisplay';
import StringDisplay from './StringDisplay';

export default function () {
  new CharDisplay('Char').display();
  new StringDisplay('String').display();
}