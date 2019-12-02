import PrintBanner from './PrintBanner';

export default function () {
  const printBanner = new PrintBanner('Adapter by class');
  printBanner.printWeak();
  printBanner.printStrong();
}
