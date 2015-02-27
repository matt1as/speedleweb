'use strict';

angular.module('speedleweb')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.awesomeThings = [];

    $http.get('/api/classifieds').success(function(classifieds) {
      $scope.classifieds = classifieds;
      //socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  })
  .controller('SomeCtrl', function( $scope ) {
   $scope.blub = 'Test';
  })
  .controller('ModalCtrl', function( $scope ) {
    this.setModel = function(data) {
      $scope.$apply( function() {
         $scope.data = data;
      });
    };
    $scope.setModel = this.setModel;     
  });
  
  angular.module('directives', []).directive('opendialog', 
   function() {
      var openDialog = {
         link :   function(scope, element) {
            function openDialog() {
              var element = angular.element('#myModal');
              var ctrl = element.controller();
              ctrl.setModel(scope.blub);
              element.modal('show');
            }
            element.bind('click', openDialog);
       }
   };
   return openDialog;
});