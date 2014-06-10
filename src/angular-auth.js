'use strict'

angular.module('gz.angular-auth', [])
  .factory('User', function($http) {

    this.login = function(user) {
      $http({
        url: 'http://localhost/ethosia/www/api/login',
        headers: {
          'PHP_AUTH_USER': 'admin',
          'PHP_AUTH_PW': 'admin'
        }
      }).success(function(data, status) {
          console.log(data, status);
        }).error(function(reason, status) {
          console.log(reason, status);
        });
    };

    return this;
  });