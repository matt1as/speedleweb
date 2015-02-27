'use strict';

angular.module('speedleweb')
  .controller('ClassifiedsCtrl', function ($scope, $rootScope, Classified, geolocation) {
	//Classified.query(function(data) {
    //  $rootScope.classifieds = data;
    //});
    
    $scope.coords = geolocation.getLocation().then(function(position){
      Classified.query({longitude:position.coords.longitude, latitude : position.coords.latitude, radius: 100000}, function(classifieds) {
       $rootScope.classifieds = classifieds;
       $scope.latitude = position.coords.latitude;
       $scope.longitude = position.coords.longitude;
      });
    },function(error) {
         //unable to get coordinates
         console.log(error);
     });
    
    $scope.search = function( classified  ) {
        Classified.query({ q : classified.search, latitude : $scope.latitude, longitude: $scope.longitude, radius:100000 }, function(data) {
        $rootScope.classifieds = data;
      });
    }
  }).controller('ClassifiedsDetailsCtrl', function ($scope, Classified, $stateParams) {
    Classified.get( {id : $stateParams.id }, function( data ) {
        $scope.classified = data;
    })
  })
  .controller('MyClassifiedsCtrl', function ($scope, Classified, $stateParams, Auth) {
    Classified.query({owner : Auth.getCurrentUser().id}, function(data) {
      $scope.classifieds = data;
    });
  })
;
