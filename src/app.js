import $ from 'jquery';
import Backbone from 'backbone';

var taskData = [
  {
    title: 'Mow the lawn',
    description: 'Must be finished before BBQ on Sat afternoon'
  }, {
    title: 'Go to the Bank',
    description: 'Need to make a transfer'
  }, {
    title: 'Tune the Piano',
    description: 'High C is missing or something???'
  }
];

var TaskView = Backbone.View.extend({
  initialize: function(options) {
    this.task = options.task;
  },

  render: function() {
    var html = '<li class="task">';
    html += '<h2>' + this.task.title + '</h2>';
    html += '<p>' + this.task.description + '</p>';
    html += '</li>';
    this.$el.html(html);
    return this;
  }
});

$(document).ready(function() {
  var taskListElement = $('.task-list');
  var cardList = []
  taskData.forEach(function(task) {
    var card = new TaskView({task: task});
    cardList.push(card);
    taskListElement.append(card.render().$el);
  });
});
