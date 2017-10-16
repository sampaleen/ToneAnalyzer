import { ToneAnalyzerPage } from './app.po';

describe('tone-analyzer App', () => {
  let page: ToneAnalyzerPage;

  beforeEach(() => {
    page = new ToneAnalyzerPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
