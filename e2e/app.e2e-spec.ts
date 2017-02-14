import { GombrunappPage } from './app.po';

describe('gombrunapp App', function() {
  let page: GombrunappPage;

  beforeEach(() => {
    page = new GombrunappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
