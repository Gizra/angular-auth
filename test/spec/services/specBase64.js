'use strict';

describe('Service: Base64', function () {

  // load the service's module
  beforeEach(module('gz.angular-auth'));

  // instantiate service
  var Base64;
  beforeEach(inject(function (_Base64_) {
    Base64 = _Base64_;
  }));

  it('should encode', function () {
    expect(Base64.encode('username:password')).toBe('dXNlcm5hbWU6cGFzc3dvcmQ=');
  });

  it('should decode', function () {
    expect(Base64.decode('dXNlcm5hbWU6cGFzc3dvcmQ=')).toBe('username:password');
  });

});