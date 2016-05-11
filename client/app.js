angular.module()

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home/home.html',
      controller: 'homeScreen'
    })
    .state('signIn', {
      url: '/signin',
      templateUrl: 'signin'
    })
    .state('newUser', {
      url: '/newuser',
      templateUrl: 'newuser/newuser.html',
      controller: 'newuser'
    });

});