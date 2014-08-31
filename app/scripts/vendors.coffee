angular.module("app")
.controller("VendorsCtrl", ($scope) ->
  $scope.vendors = [
    {name: "AngularJs", description: "for the application framework", image: "angular.png", link: "http://angularjs.org/"}
    {name: "PhoneGap", description: "for compiling/supporting different devices.", image: "phonegap.png", link: "http://phonegap.com/"}
    {name: "Ionic", description: " a powerful HTML5 native app development framework.", image: "ionic.png", link: "http://ionicframework.com"}
  ]
)