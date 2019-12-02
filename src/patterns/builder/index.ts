import Director from './Director';
import HtmlBuilder from './HtmlBuilder';
import TextBuilder from './TextBuilder';

export default function() {
  const htmlBuilder: HtmlBuilder = new HtmlBuilder();
  const htmlDirector: Director = new Director(htmlBuilder);
  htmlDirector.construct();
  console.log('HTML', htmlBuilder.getResult());

  const textBuilder: TextBuilder = new TextBuilder();
  const textDirector: Director = new Director(textBuilder);
  textDirector.construct();
  console.log('TEXT', textBuilder.getResult());
}
