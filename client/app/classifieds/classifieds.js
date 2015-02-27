'use strict';

angular.module('speedleweb')
  .config(function ($stateProvider) {
    $stateProvider
      .state('classifieds', {
        url: '/classifieds',
        templateUrl: 'app/classifieds/classifieds.html',
        controller: 'ClassifiedsCtrl'
      }).state('myItems', {
        url: '/classifieds/myItems',
        templateUrl: 'app/classifieds/classifieds.html',
        controller: 'MyClassifiedsCtrl'
      })
	  .state('details', {
	          url: '/classifieds/:id',
	          templateUrl: 'app/classifieds/classifieds.detail.html',
	          controller: 'ClassifiedsDetailsCtrl'
	        });
      
  });