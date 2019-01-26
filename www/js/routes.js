angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('hOMEPAGE', {
    url: '/page1',
    templateUrl: 'templates/hOMEPAGE.html',
    controller: 'hOMEPAGECtrl'
  })

  .state('nEWS', {
    url: '/page2',
    templateUrl: 'templates/nEWS.html',
    controller: 'nEWSCtrl'
  })

  .state('latestEvent', {
    url: '/page3',
    templateUrl: 'templates/latestEvent.html',
    controller: 'latestEventCtrl'
  })

  .state('festivalAlQuran', {
    url: '/page4',
    templateUrl: 'templates/festivalAlQuran.html',
    controller: 'festivalAlQuranCtrl'
  })

  .state('page', {
    url: '/page5',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('wELCOMEPAGE', {
    url: '/page7',
    templateUrl: 'templates/wELCOMEPAGE.html',
    controller: 'wELCOMEPAGECtrl'
  })

$urlRouterProvider.otherwise('/page7')


});