import DS from 'ember-data';

export default DS.Model.extend({
  code: DS.attr('string'),
  courses: DS.hasMany('hs-course')
});
