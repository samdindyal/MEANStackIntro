var app = angular.module('app', []);
var socket = io();

app.controller('WallCtrl', function ($scope, MessagesSvc) {

  $scope.connectedUsers = 1 + " user connected.";

  $scope.writeToWall = function () {
    if ($scope.postBody) {
      $('button#add_post').addClass('inactive');
      $('button#add_post').prop("disabled",true);
      MessagesSvc.create({
        name: $scope.username,
        body: $scope.postBody
      }).success(function(message){
        $('button#add_post').removeClass('inactive');
        $('button#add_post').prop("disabled",false);
        $scope.messages.unshift(message);
        socket.emit('new message', $scope.username + ": " + $scope.postBody);
        $scope.postBody = null;
      }).error(function(message) {
        $('button#add_post').removeClass('inactive');
        $('button#add_post').prop("disabled",false);
      });
    }
  }

  socket.on('update usercount', function(connectedUsers){
      document.getElementById('connected_users').textContent = connectedUsers + ' user' + ((connectedUsers != 1) ? 's' : '') + ' connected';
   });

  socket.on('refresh', function(connectedUsers){
    document.getElementById('connected_users').textContent = connectedUsers + ' user' + ((connectedUsers != 1) ? 's' : '') + ' connected';
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
