import { GrabovojGombrunaPage } from './app.po';

describe('grabovoj-gombruna App', function() {
  let page: GrabovojGombrunaPage;

  beforeEach(() => {
    page = new GrabovojGombrunaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
