import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import TaskListView from 'app/views/task_list_view';

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


$(document).ready(function() {
  var application = new TaskListView({
    el: $('#application'),
    taskData: taskData
  });
  application.render();
});

// https://github.com/Ada-Developers-Academy/textbook-curriculum/blob/master/11-Backbonejs/02-Backbone-Views.md
