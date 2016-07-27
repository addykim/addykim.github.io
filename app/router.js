import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('page-not-found', { path: '/*wildcard' });
  this.route('about');
  this.route('projects');
});

export default Router;
