var app = angular.module('splashpage', []);
app.controller('SplashCtrl', function ($scope, $http) {
  $scope.authors = [
    {
      name: "Ji Qi"
    },
    {
      name: "Rabih Talaba"
    },
    {
      name: "Beverly Li"
    },
    {
      name: "Carolyn Wang"
    },
    {
      name: "Sam Dindyal"
    }
  ];
});
