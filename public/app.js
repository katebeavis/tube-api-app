var app = angular.module('tube', ['google.places', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'public/partials/tube.ejs',
    controller: 'tubeController'
  });
}]);