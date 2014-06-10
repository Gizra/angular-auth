# angular-auth

## Getting Started

Intallation via bower:

```bash
bower install git@github.com:Gizra/angular-auth.git
```

Include the required libraries:
```html
<script src='/bower_components/textAngular/dist/angular-auth.min.js'></script>
```

Inject the angular-auth module into your app:
```javascript
angular.module('myApp', ['gz.angularAuth']);
```

Example:
After add the module, we can use the service User

```javascript
angular.module('myApp')
  .controller('LoginCtrl', function(User) {
    User.login(data);
  })
```
