'use strict';

angular.module('speedleweb')
  .config(function ($stateProvider) {
    $stateProvider
      .state('privacyPolicy', {
        url: '/privacyPolicy',
        templateUrl: 'app/privacyPolicy/privacyPolicy.html',
        controller: 'PrivacyPolicyCtrl'
      });
  });