App = angular.module("app", ['ionic'])


App.run ($ionicPlatform) ->

  $ionicPlatform.ready ->
    # Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    #  for form inputs)
    if window.cordova && window.cordova.plugins.Keyboard
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true)

    if window.StatusBar
      # org.apache.cordova.statusbar required
      StatusBar.styleDefault()


App.config ($stateProvider, $urlRouterProvider) ->
  $stateProvider
  .state("tab",
    url: "/tab"
    abstract: true
    templateUrl: "templates/tabs.html"
  ).state("tab.home",
    url: "/home"
    views:
      "home-tab":
        templateUrl: "templates/home.html"
  ).state("tab.vendors",
    url: "/vendors"
    views:
      "vendors-tab":
        templateUrl: "templates/vendors.html",
        controller: "VendorsCtrl"
  ).state("tab.about",
    url: "/about"
    views:
      "about-tab":
        templateUrl: "templates/about.html"
  )

  $urlRouterProvider.otherwise "/tab/home"