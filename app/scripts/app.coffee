App = angular.module("app", ['ionic'])

App.config ($stateProvider, $urlRouterProvider) ->
  $stateProvider
  .state("tab",
    url: "/tab"
    abstract: true
    templateUrl: "/tabs.html"
  ).state("tab.home",
    url: "/home"
    views:
      "home-tab":
        templateUrl: "/home.html"
  )
  $urlRouterProvider.otherwise "/tab/home"
