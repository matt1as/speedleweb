'use strict';

angular.module('speedleweb')
  .config(function ($stateProvider) {
    $stateProvider
      .state('abuse', {
        url: '/abuse',
        templateUrl: 'app/abuse/abuse.html',
        controller: 'AbuseCtrl'
      });
  });