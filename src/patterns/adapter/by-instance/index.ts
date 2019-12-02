import PrintBanner from './PrintBanner';

export default function () {
  const printBanner = new PrintBanner('Adapter by instance');
  printBanner.printWeak();
  printBanner.printStrong();
}