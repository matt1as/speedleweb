'use strict';

angular.module('speedleweb')
  .config(function ($stateProvider) {
    $stateProvider
      .state('teaser', {
        url: '/teaser',
        templateUrl: 'app/teaser/teaser.html',
        controller: 'TeaserCtrl'
      });
  });