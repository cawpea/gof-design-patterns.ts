import Factory from './factory/Factory';

export default async function() {
  const listFactory: Factory | null = await Factory.getFactory('list-factory/ListFactory');
  if (!listFactory) {
    console.error(`Does not find ListFactory Class.`)
    return;
  }
  const $asahiLink = listFactory.createLink('朝日新聞', 'http://asahi.com');
  const $yomiuriLink = listFactory.createLink('読売新聞', 'http://yomiuri.com');
  const $newsTray = listFactory.createTray('That is new!');
  const $newsPage = listFactory.createPage('News', 'Masaki Osumi');
  $newsTray.add($asahiLink);
  $newsTray.add($yomiuriLink);
  $newsPage.add($newsTray);
  $newsPage.output();
}
