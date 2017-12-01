import { HotelProjectPage } from './app.po';

describe('hotel-project App', () => {
  let page: HotelProjectPage;

  beforeEach(() => {
    page = new HotelProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
