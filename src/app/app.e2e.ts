import { browser, by, element } from 'protractor';
import 'tslib';

describe('App', () => {

  beforeEach(async () => {
    await browser.get('/');
  });

  it('should have a title', async () => {
    let subject = await browser.getTitle();
    let result  = 'Angular Boilerplate by Eric Wang based on Angular2 Webpack Starter';
    expect(subject).toEqual(result);
  });
});
