'use strict';

angular.module('speedleweb')
  .config(function ($stateProvider) {
    $stateProvider
      .state('termsOfService', {
        url: '/termsOfService',
        templateUrl: 'app/termsOfService/termsOfService.html',
        controller: 'TermsOfServiceCtrl'
      });
  });