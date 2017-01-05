import { ConnectPage } from './app.po';

describe('connect App', function() {
  let page: ConnectPage;

  beforeEach(() => {
    page = new ConnectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
