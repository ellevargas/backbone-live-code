import Backbone from 'backbone';

var Task = Backbone.Model.extend({
  defaults: {
    title: "Placeholder title",
    description: "Placeholder desc",
    complete: false // not necessary because undefined == falsey in js, this optional
  },
  initialize: function(options) {
    console.log("BOOM NEW TASK TITLE: " + this.get("title"));

    // .toJSON will convert attributes to a new JSON object whereas get just retreives one attribute

    // this.set("description", "JS was written in 10 days");
    // ^ handy for update operation on a contact in rolodex project
  }

});

export default Task;
