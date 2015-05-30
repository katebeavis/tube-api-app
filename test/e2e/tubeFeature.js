describe('tube', function() {

  beforeEach(function() {
    browser.get('http://localhost:3000');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Tube App');
  });

  it('displays a list of tube lines on initialisation', function() {
    expect(element.all(by.css('.lines')).get(0).getText()).toEqual('Bakerloo:');
  });

  it('displays a list of tube statuses on initialisation', function() {
    expect(element.all(by.css('.status')).get(0).getText()).toBeDefined;
  });

});