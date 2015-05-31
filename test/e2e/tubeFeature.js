describe('tube', function() {

  beforeEach(function() {
    browser.get('http://localhost:3000');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Tube App');
  });

  it('displays a list of tube lines and statuses on initialisation', function() {
    expect(element.all(by.css('.lines')).get(0).isDisplayed()).toEqual(true);
  });

  it('displays a list of stations when a line is clicked on', function() {
    element.all(by.css('.lines')).get(0)
    .click();
    expect(element.all(by.css('.stations')).get(0).getText()).toEqual('Baker Street', 'Charing Cross', 'Edgware Road (Bakerloo)', 'Elephant & Castle', 'Embankment', 'Harlesden', 'Harrow & Wealdstone', 'Kensal Green', 'Kenton', 'Kilburn Park', 'Lambeth North', 'Maida Vale', 'Marylebone', 'North Wembley', 'Oxford Circus', 'Paddington (Bakerloo)', 'Piccadilly Circus', 'Queen\'s Park', 'Regent\'s Park', 'South Kenton', 'Stonebridge Park', 'Warwick Avenue', 'Waterloo', 'Wembley Central', 'Willesden Junction');
  });

  it('displays input boxes for a user to enter postcodes', function() {
    expect(element.all(by.css('.start')).get(0).isDisplayed()).toEqual(true);
    expect(element.all(by.css('.end')).get(0).isDisplayed()).toEqual(true);
  });
});