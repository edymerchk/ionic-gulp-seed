App = angular.module("app", ['ionic', 'templates'])

App.config ($stateProvider, $urlRouterProvider) ->
  $stateProvider
  .state("tab",
    url: "/tab"
    abstract: true
    templateUrl: '/templates/tabs.html'
  ).state("tab.home",
    url: "/home"
    views:
      "home-tab":
        templateUrl: "/templates/home.html"
  )
  $urlRouterProvider.otherwise "/tab/home"
