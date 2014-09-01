'use strict';
(function() {
  var App;

  App = angular.module("app", ['ionic']);

  App.run(function($ionicPlatform) {
    return $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        return StatusBar.styleDefault();
      }
    });
  });

  App.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state("tab", {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    }).state("tab.home", {
      url: "/home",
      views: {
        "home-tab": {
          templateUrl: "templates/home.html"
        }
      }
    }).state("tab.vendors", {
      url: "/vendors",
      views: {
        "vendors-tab": {
          templateUrl: "templates/vendors.html",
          controller: "VendorsCtrl"
        }
      }
    }).state("tab.about", {
      url: "/about",
      views: {
        "about-tab": {
          templateUrl: "templates/about.html"
        }
      }
    });
    return $urlRouterProvider.otherwise("/tab/home");
  });

}).call(this);

(function() {
  angular.module("app").controller("VendorsCtrl", function($scope) {
    return $scope.vendors = [
      {
        name: "AngularJs",
        description: "for the application framework",
        image: "angular.png",
        link: "http://angularjs.org/"
      }, {
        name: "PhoneGap",
        description: "for compiling/supporting different devices.",
        image: "phonegap.png",
        link: "http://phonegap.com/"
      }, {
        name: "Ionic",
        description: " a powerful HTML5 native app development framework.",
        image: "ionic.png",
        link: "http://ionicframework.com"
      }
    ];
  });

}).call(this);
