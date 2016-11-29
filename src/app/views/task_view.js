var TaskView = Backbone.View.extend({
  initialize: function(options) {
    // this.task = options.task;
    this.template = options.template;
    this.listenTo(this.model, "change", this.render);
  }, // change is an event all models have

  events: {
    'click .complete-button': 'completeHandler'
  },

  completeHandler: function() {
    console.log("HANDLERRRR");
    this.model.toggleComplete();
    // this.render(); better to have the model let us know when something has changed
  },

  render: function() {
    this.delegateEvents();
    // ^ reconnects the DOM event handlers

    var html = this.template({task: this.model.attributes}) // alt use .toJSON() - attributes will bypass validations and give you direct access so be careful
    this.$el.html(html);

    // this $el is a jquery selection of this element and so we have access to it

    // otherwise el is just a generic div tag

    // Enable chained calls
    return this;
  }
});

export default TaskView;
