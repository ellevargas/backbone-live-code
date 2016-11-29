import Task from 'app/models/task';

var TaskList = Backbone.collection.extend({
  model: Task
})


export default TaskList;
