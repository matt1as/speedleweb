'use strict';

angular.module('speedleweb')
  .controller('CategoriesCtrl', function ($scope, $http, Category, Language) {
    
//  $scope.defaultLanguage = Auth.getCurrentUser().facebook.locale
// Get languages
      
      $scope.languages = Language.query();
      $scope.categories = Category.query();
      
      $scope.save = function( category ) {
        $scope.categories.push(category);
        Category.save(category);
      };
      
  });
