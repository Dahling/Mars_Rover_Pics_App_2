import { MarsPage } from './app.po';

describe('mars App', () => {
  let page: MarsPage;

  beforeEach(() => {
    page = new MarsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
