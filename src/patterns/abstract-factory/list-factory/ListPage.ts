import Page from '../factory/Page';

export default class ListPage extends Page {
  makeHTML(): HTMLElement {
    const $wrapper = document.createElement('div');
    const $title = document.createElement('h1');
    $title.textContent = this.title;
    const $author = document.createElement('cite');
    $author.textContent = this.author;
    $wrapper.appendChild($title);
    this.content.forEach(item => {
      $wrapper.appendChild(item.makeHTML());
    })
    $wrapper.appendChild($author);
    return $wrapper;
  }
}
