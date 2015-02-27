'use strict';

angular.module('speedleweb')
  .controller('NavbarCtrl', function ($scope, $rootScope, $location, Auth, Classified, Category) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    Category.query( function(data ) {
	 $scope.categories = data.map(function( category ) {
		  category.selected = true;
		  return category;
	  });
	  $scope.selectedCategories = $scope.categories.slice();
    })

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
    
    $scope.search = function( classified  ) {
      var categoryIds = [];
      angular.forEach($scope.selectedCategories, function(value, key) {
        this.push(value._id);
      }, categoryIds);
      Classified.query({ q : classified.search, categories : categoryIds.toString() }, function(data) {
      $rootScope.classifieds = data;
    });
    }
    
  $scope.toggleSelection = function toggleSelection(category) {
    var idx = $scope.selectedCategories.indexOf(category);

    // is currently selected
    if (idx > -1) {
      $scope.selectedCategories.splice(idx, 1);
	  category.selected = false;
    }

    // is newly selected
    else {
      $scope.selectedCategories.push(category);
	  category.selected = true;
    }
  };
  });