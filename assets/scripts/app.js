var app = angular.module('app', []);
var socket = io(window.location.hostname);

app.controller('WallCtrl', function ($scope, MessagesSvc) {

  $scope.writeToWall = function () {
    if ($scope.postBody) {
      MessagesSvc.create({
        name: $scope.username,
        body: $scope.postBody
      }).success(function(message){
        $scope.messages.unshift(message);

        socket.emit('new message', $scope.username + ": " + $scope.postBody);

        $scope.postBody = null;
        $scope.username = null;
      });
    }
  }

  socket.on('refresh', function(msg){
      MessagesSvc.fetch().success(function (messages){
        $scope.messages = messages;
      });
   });

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
