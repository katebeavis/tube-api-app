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
    expect(element.all(by.css('.status')).get(0).isDisplayed()).toEqual(true);
  });

  it('displays a list of stations when  a line is clicked on', function() {
    element.all(by.css('.lines')).get(0)
    .click();
    expect(element.all(by.css('.stations')).get(0).getText()).toEqual('Baker Street', 'Charing Cross', 'Edgware Road (Bakerloo)', 'Elephant & Castle', 'Embankment', 'Harlesden', 'Harrow & Wealdstone', 'Kensal Green', 'Kenton', 'Kilburn Park', 'Lambeth North', 'Maida Vale', 'Marylebone', 'North Wembley', 'Oxford Circus', 'Paddington (Bakerloo)', 'Piccadilly Circus', 'Queen\'s Park', 'Regent\'s Park', 'South Kenton', 'Stonebridge Park', 'Warwick Avenue', 'Waterloo', 'Wembley Central', 'Willesden Junction');
  });

  it('displays a journey time when two postcodes are entered', function() {
    element.all(by.css('.start')).sendKeys('NW6 3PN');
    element.all(by.css('.end')).sendKeys('WC2N 6NA');
    element.all(by.css('.button'))
    .click();
    expect(element.all(by.css('.time')).get(0).isDisplayed()).toEqual(true);
  });

  it('displays a journey route when two postcodes are entered', function() {
    element.all(by.css('.start')).sendKeys('NW6 3PN');
    element.all(by.css('.end')).sendKeys('WC2N 6NA');
    element.all(by.css('.button'))
    .click();
    expect(element.all(by.css('.route')).get(0).isDisplayed()).toEqual(true);
  });


});