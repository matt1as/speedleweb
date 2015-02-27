'use strict';

describe('Controller: TermsOfServiceCtrl', function () {

  // load the controller's module
  beforeEach(module('speedleweb'));

  var TermsOfServiceCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TermsOfServiceCtrl = $controller('TermsOfServiceCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
