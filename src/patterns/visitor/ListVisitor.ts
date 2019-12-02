import Visitor from './IVisitor';
import File from './File';
import Directory from './Directory';
import Entry from './Entry';

export default class ListVisitor implements Visitor {
  private currentDir: string = '';
  public visit(entry: File | Directory): void {
    if (entry instanceof File) {
      console.log(`${this.currentDir}/${entry.toString()}`);
    } else if (entry instanceof Directory) {
      console.log(`${this.currentDir}/${entry.toString()}`);
      const saveDir: string = this.currentDir;
      this.currentDir += `/${entry.getName()}`;
      const it: Iterator<Entry> = entry.iterator();
      let result: IteratorResult<Entry> | null = null;
      while(result === null || !result.done) {
        result = it.next();
        if (result.value) {
          result.value.accept(this);
        }
      }
      this.currentDir = saveDir;
    }
  }
}
