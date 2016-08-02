import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['project-preview'],

  showMore: function() {
  	return true;
  }.property('project.description')
});
