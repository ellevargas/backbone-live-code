import Backbone from 'backbone';

var Task = Backbone.Models.extend({
  defaults: {
    title: "Placeholder title",
    description: "Placeholder desc",
    complete: false // not necessary because undefined == falsey in js, this optional
  },
  initialize: function(options) {
    console.log("Task created with a title of: " + this.title;)
  }

});

export default Task;
