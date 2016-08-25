import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['project-block'],

  showMore: function() {
  	return true;
  }.property('project.description')
});
