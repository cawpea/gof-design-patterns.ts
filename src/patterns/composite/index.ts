import File from './File';
import Directory from './Directory';

export default function () {
  console.log('Making root entries...');
  const rootDir: Directory = new Directory('root');
  const binDir: Directory = new Directory('bin');
  const tmpDir: Directory = new Directory('tmp');
  const usrDir: Directory = new Directory('usr');

  rootDir.add(binDir);
  rootDir.add(tmpDir);
  rootDir.add(usrDir);
  binDir.add(new File('vi', 1000));
  binDir.add(new File('latex', 20000));
  rootDir.printList('');
}
