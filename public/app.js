var app = angular.module('tube', ['google.places', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'public/partials/tube.ejs',
    controller: 'tubeController'
  })
  .when('/map', {
  templateUrl: 'public/partials/map.ejs',
  controller: 'tubeController'
  })
  .when('/planner', {
  templateUrl: 'public/partials/planner.ejs',
  controller: 'tubeController'
  });
}]);