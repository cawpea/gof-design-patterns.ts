import PrototypeManager from './PrototypeManager';
import MessageBox from './MessageBox';
import UnderlinePen from './UnderlinePen';

export default function() {
  const manager = new PrototypeManager();
  manager.register('asterBox', new MessageBox('*'));
  manager.register('tildeBox', new MessageBox('~'));
  manager.register('doubleLine', new UnderlinePen('='));
  manager.register('singleLine', new UnderlinePen('-'));

  const asterBox: MessageBox = manager.create<MessageBox>('asterBox');
  asterBox.use('これはアスタリスク');
  const tildeBox: MessageBox = manager.create<MessageBox>('tildeBox');
  tildeBox.use('これはチルダ');
  const doubleLine: UnderlinePen = manager.create<UnderlinePen>('doubleLine');
  doubleLine.use('これは二重線');
  const singleLine: UnderlinePen = manager.create<UnderlinePen>('singleLine');
  singleLine.use('これは一本線');
}
