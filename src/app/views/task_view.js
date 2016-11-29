var TaskView = Backbone.View.extend({
  initialize: function(options) {
    this.task = options.task;
    this.template = options.template;
  },

  render: function() {
    var html = this.template({task: this.task})
    this.$el.html(html);

    // this $el is a jquery selection of this element and so we have access to it

    // otherwise el is just a generic div tag

    // Enable chained calls
    return this;
  }
});

export default TaskView;
