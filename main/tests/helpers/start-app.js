import Application from 'js/app';
import Router from 'js/router';

function startApp() {
  var App;

  var attributes = {
    rootElement: '#ember-testing'
  };

  Router.reopen({
    location: 'none'
  });

  Ember.run(function(){
    App = Application.create(attributes);
    App.setupForTesting();
    App.injectTestHelpers();
  });

  App.reset();

  return App;
}

export default startApp;
