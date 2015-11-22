var app = angular.module('app', []);
app.controller('WallCtrl', function ($scope, MessagesSvc) {

  $scope.addPost = function () {
    if ($scope.postBody) {
      MessagesSvc.create({
        username: $scope.name,
        body: $scope.postBody
      }).success(function(post){
        $scope.posts.unshift(post);
        $scope.postBody = null;
      });
    }
  }

  MessagesSvc.fetch().success(function (posts){
    $scope.posts = posts;
  });
});

app.service('MessagesSvc', function($http) {
  this.fetch = function() {
    return $http.get('/api/messages');
  }

  this.create = function (post) {
    return $http.post('/api/messages', post);
  }
});
