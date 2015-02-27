'use strict';

describe('Controller: AbuseCtrl', function () {

  // load the controller's module
  beforeEach(module('speedleweb'));

  var AbuseCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AbuseCtrl = $controller('AbuseCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
