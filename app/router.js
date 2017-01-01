import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('dimensions', function() {
      this.route('dimension', {path: ':dimension_id'}, function() {
        this.route('value', {path: 'values/:value_id'});
      });
  });
});

export default Router;
