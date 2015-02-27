'use strict';

angular.module('speedleweb')
  .controller('ContactCtrl', function ($scope) {
      $scope.send = function( contact  ) {
		  contact.
		  Contact.post( )
          Classified.query({ q : classified.search, latitude : $scope.latitude, longitude: $scope.longitude, radius:100000 }, function(data) {
          $rootScope.classifieds = data;
        });
      }
  });
