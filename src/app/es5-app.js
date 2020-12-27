// es5App is a global variable used in the html file
// window.es5App =  singleSpaAngular1.default({
//   angular: window.angular,
//   domElementGetter: function() {
//     return document.getElementById('angularjs-container');
//   },
//   mainAngularModule: 'main-module',
//   preserveGlobal: true,
//   template: '<root />',
// })

// import * as singleSpa from 'single-spa';

// note that "js" is not capitalized in the name of the global variable.

angular.module('main-module', []);

angular.module('main-module').component('root', {
  template: '<div>Hello from angularjs!</div>',
  controllerAs: 'vm',
  controller: function () {
    var vm = this;

    vm.$onInit = function () {
      console.log('mounting root angular component');
    };

    vm.$onDestroy = function () {
      console.log('unmounting root angular component!');
    };
  },
});

window.es5App = window.singleSpaAngularjs.default({
  angular: window.angular,
  mainAngularModule: 'main-module',
  domElementGetter: function () {
    return document.getElementById('angularjs-container');
  },
  uiRouter: false,
  preserveGlobal: false,
  template: '<root />',
});
window.singleSpa.registerApplication({
  name: 'es5-App',
  app: es5App,
  activeWhen: () => true
});



window.showEs5App = true;
// window.singleSpa.registerApplication('es5-app', es5App, function(location) {return showEs5App});


function toggleEs5App() {
  // See https://github.com/CanopyTax/single-spa/blob/master/docs/single-spa-config.md#registering-applications
  // Usually you have a path prefix or something in the url to determine if the app is active.
  // I did not do so here out of laziness / to save time.
  window.showEs5App = !window.showEs5App;
  singleSpa.triggerAppChange();
}

singleSpa.start();


