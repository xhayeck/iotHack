angular.module('neighborhoodwatch.signin', [])

.controller('signin', function($scope, $state, Users) {

  $scope.user = {};

  $scope.submit = function() {
    Users.login(user)
      .then(function(data) {
        
      })
  };

});