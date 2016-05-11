
  angular.module('neighborhoodwatch.crimeform', [])
  .controller('crimeform', ['Crimes', function(Crimes){

    formData = {};

    //current user info
    reportedBy = '';

    type = '';
    message = '';
    zipCode = 0;
    phoneNumber = 0;

    submit = function(){
      Crimes.addNewCrime({
        message : message,
        type : type,
        zipCode : zipCode
      })
    }
  }]);