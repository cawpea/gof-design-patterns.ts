import Link from '../factory/Link';

export default class ListLink extends Link {
  makeHTML(): HTMLElement {
    const $link = document.createElement('a');
    $link.href = this.url;
    $link.textContent = this.caption;
    const $listItem = document.createElement('li');
    $listItem.appendChild($link);
    return $listItem;
  }
}
