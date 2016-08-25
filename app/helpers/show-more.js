import Ember from 'ember';

const MAX_LENGTH = 100;

export function showMore(params) {
  var description = params[0];

  if (description.length > MAX_LENGTH) {
  	var short = description.substr(0, MAX_LENGTH);
  }
  return short ? short : description;
}

export default Ember.Helper.helper(showMore);