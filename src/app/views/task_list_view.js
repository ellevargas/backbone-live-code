import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

import TaskView from 'app/views/task_view';
import Task from 'app/models/task';

var TaskListView = Backbone.View.extend({
  initialize: function(options) {
    // Store a the full list of tasks
    // this.taskData = options.taskData;

    this.modelList = [];

    // Compile a template to be shared between the individual tasks
    this.taskTemplate = _.template($('#task-template').html());

    // Keep track of the <ul> element
    this.listElement = this.$('.task-list');

    // Create a TaskView for each task
    this.cardList = [];

    options.taskData.forEach(function(task) {
      this.addTask(task);
      // var card = new TaskView({
      //   task: task,
      //   template: this.taskTemplate
      // });
      // this.cardList.push(card);
    }, this); // bind `this` so it's available inside forEach

      this.input = {
      title: this.$('.new-task input[name="title"]'),
      description: this.$('.new-task input[name="description"]')
    };
  }, // end of initialize function

  render: function() {
    // Make sure the list in the DOM is empty
    // before we start appending items
    this.listElement.empty();

    // Loop through the data assigned to this view
    this.cardList.forEach(function(card) {
      // Cause the task to render
      card.render();

      // Add that HTML to our task list
      this.listElement.append(card.$el);
    }, this);

    return this; // enable chained calls
  },

  events: {
    'submit .new-task': 'createTask',
    // works on type = "submit" and tries to throw down the whole form
    'click .clear-button': 'clearInput'
    // works on type = "button" without trying to submit the whole form
  },

  createTask: function(event) {
    // Normally a form submission will refresh the page.
    // Suppress that behavior.
    event.preventDefault();

    // Get the input data from the form and turn it into a task
    var task = this.getInput();

    // Add the new task to our list of tasks

    // this.taskData.push(task);
    //
    // // Create a card for the new task, and add it to our card list
    // var card = new TaskView({
    //   task: task,
    //   template: this.taskTemplate
    // });
    // this.cardList.push(card);

    // Re-render the whole list, now including the new card
    this.render();

    // Clear the input form so the user can add another task
    this.clearInput();
  },

  clearInput: function(event) {
    this.input.title.val('');
    this.input.description.val('');
  },

  getInput: function() {
    var task = {
      title: this.input.title.val(),
      description: this.input.description.val()
    };
    return task;
  },

  addTask: function(rawTask) {
    var task = new Task(rawTask);
    this.modelList.push(task);

    var card = new TaskView({
      model: task,
      template: this.taskTemplate
    });
    this.cardList.push(card);
  }

});

export default TaskListView;
