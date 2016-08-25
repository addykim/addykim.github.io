import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),	
  description: DS.attr('string'),
  projectUrl: DS.attr('string'),
  thumbnailUrl: DS.attr('string'),
  timestamp: DS.attr('number')
});