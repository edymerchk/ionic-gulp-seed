'use strict';
(function() {
  var App;

  App = angular.module("app", ['ionic', 'templates']);

  App.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state("tab", {
      url: "/tab",
      abstract: true,
      templateUrl: '/templates/tabs.html'
    }).state("tab.home", {
      url: "/home",
      views: {
        "home-tab": {
          templateUrl: "/templates/home.html"
        }
      }
    });
    return $urlRouterProvider.otherwise("/tab/home");
  });

}).call(this);
