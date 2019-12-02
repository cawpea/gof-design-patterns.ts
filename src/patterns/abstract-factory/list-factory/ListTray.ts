import Tray from '../factory/Tray';

export default class ListTray extends Tray {
  makeHTML(): HTMLElement {
    const $wrapper = document.createElement('div');
    const $caption = document.createElement('h2');
    $caption.textContent = this.caption;
    $wrapper.appendChild($caption);
    this.tray.forEach(item => {
      $wrapper.appendChild(item.makeHTML());
    })
    return $wrapper;
  }
}
