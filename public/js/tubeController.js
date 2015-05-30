app.controller('tubeController', function($http) {

  var self = this;
  var name;

  $http.get('http://transportapi.com/v3/uk/tube/lines.json?api_key=8ffc3fa2097e12ebc6d4939d74f746cd&app_id=7d46342d')
  .success(function(data) {
    self.lines = data.lines;
  });

  self.lines = [];

  self.showStations = function(line) {
    if (line.friendly_name === 'Hammersmith & City') {
      var name = 'hammersmith';
    } else if (line.friendly_name === "Waterloo & City") {
        var name = 'waterlooandcity';
      } else {
    var name = line.friendly_name.toLowerCase(); }
    $http.get('http://transportapi.com/v3/uk/tube/' + name + '.json?api_key=8ffc3fa2097e12ebc6d4939d74f746cd&app_id=7d46342d')
      .success(function(data) {
      self.stations = data.stations;
    });
  };

  self.journeyPlanner = function() {
    self.start = self.start.replace(/ /g,'+');
    self.end = self.end.replace(/ /g,'+');
    console.log(self.start);
    console.log(self.end);
      $http.get('http://transportapi.com/v3/uk/public/journey/from/postcode:' + self.start + '/to/postcode:' + self.end + '.json?api_key=8ffc3fa2097e12ebc6d4939d74f746cd&app_id=7d46342d')
      .success(function(data) {
      self.times = data.routes[0].duration;
      self.routes = data.routes[0].route_parts;
      self.start = null;
      self.end = null;
    });
  };
});