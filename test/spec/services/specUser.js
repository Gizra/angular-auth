'use strict';

describe('Service: User', function () {

  // load the service's module
  beforeEach(module('gz.angular-auth'));

  // instantiate service
  var User;
  beforeEach(inject(function (_User_) {
    User = _User_;
  }));

});