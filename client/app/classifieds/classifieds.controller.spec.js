'use strict';

describe('Controller: ClassifiedsCtrl', function () {

  // load the controller's module
  beforeEach(module('speedleweb'));

  var ClassifiedsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClassifiedsCtrl = $controller('ClassifiedsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
