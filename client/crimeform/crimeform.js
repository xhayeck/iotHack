angular.module('neighborhoodwatch.crimeform', [])
  .controller('crimeform', ['$scope', '$state', 'Crimes', function($scope, $state, Crimes){

    $scope.formData = {};

    //current user info
    $scope.reportedBy = 'Ting';

    $scope.type = 'Murder';
    $scope.message = 'Hello World';
    $scope.zipCode = 12345;
    $scope.phoneNumber = 5555555555;
    $scope.email = "test@gmail.com";

    $scope.submit = function(){
      Crimes.addNewCrime({
        message : $scope.message,
        type : $scope.type,
        zipCode : $scope.zipCode,
        email: $scope.email,
        phoneNumber: $scope.phoneNumber,
        reportedBy: $scope.reportedBy
      });
      $state.go('video');
    }
  }]);
