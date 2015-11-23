var app = angular.module('splashpage', []);
app.controller('SplashCtrl', function ($scope, $http) {
  $scope.authors = [
    {
      name: "Ji Qi",
      profile: "#"
    },
    {
      name: "Rabih Talaba",
      profile: "https://github.com/rabie3"
    },
    {
      name: "Beverly Li",
      profile: "https://github.com/beverlily"
    },
    {
      name: "Carolyn Wang",
      profile: "https://github.com/LynW"
    },
    {
      name: "Sam Dindyal",
      profile: "https://github.com/samdindyal"
    }
  ];
});
