'use strict';

describe('Service: classifieds', function () {

  // load the service's module
  beforeEach(module('speedleweb'));

  // instantiate service
  var Classified;
  beforeEach(inject(function (_Classified_) {
    Classified = _Classified_;
  }));

  it('should do something', function () {
    //expect(!!classifieds).toBe(true);
  });

});
