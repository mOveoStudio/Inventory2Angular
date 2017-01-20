import { Angular2inventoryPage } from './app.po';

describe('angular2inventory App', function() {
  let page: Angular2inventoryPage;

  beforeEach(() => {
    page = new Angular2inventoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
