var app = angular.module('app', []);
app.controller('WallCtrl', function ($scope, MessagesSvc) {

  $scope.writeToWall = function () {
    if ($scope.postBody) {
      MessagesSvc.create({
        name: $scope.username,
        body: $scope.postBody
      }).success(function(message){
        $scope.messages.unshift(message);
        $scope.postBody = null;
        $scope.username = null;
      });
    }
  }

  MessagesSvc.fetch().success(function (messages){
    $scope.messages = messages;
  });
});

app.service('MessagesSvc', function($http) {
  this.fetch = function() {
    return $http.get('/api/messages');
  }

  this.create = function (message) {
    return $http.post('/api/messages', message);
  }
});
