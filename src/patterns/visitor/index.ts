import Directory from './Directory';
import File from './File';
import ListVisitor from './ListVisitor';

export default function () {
  const rootDir: Directory = new Directory('root');
  const tmpDir: Directory = new Directory('tmp');
  const usrDir: Directory = new Directory('usr');
  rootDir.add(tmpDir);
  rootDir.add(usrDir);
  rootDir.add(new File('vi', 1000));
  tmpDir.add(new File('temp1.txt', 2000));
  tmpDir.add(new File('temp1.jpeg', 30000));
  rootDir.accept(new ListVisitor());
}
