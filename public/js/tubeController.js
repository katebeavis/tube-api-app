app.controller('tubeController', function($http) {

  var self = this;

  $http.get('http://transportapi.com/v3/uk/tube/lines.json?api_key=8ffc3fa2097e12ebc6d4939d74f746cd&app_id=7d46342d')
  .success(function(data) {
    self.lines = data.lines
    console.log(self.lines);
  });

  self.lines = []

});