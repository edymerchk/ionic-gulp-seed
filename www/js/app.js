'use strict';
(function() {
  var App;

  App = angular.module("app", ['ionic']);

  App.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state("tab", {
      url: "/tab",
      abstract: true,
      templateUrl: "/tabs.html"
    }).state("tab.home", {
      url: "/home",
      views: {
        "home-tab": {
          templateUrl: "/home.html"
        }
      }
    });
    return $urlRouterProvider.otherwise("/tab/home");
  });

}).call(this);
