/**
 * Class for todo list
 * @constructor
 */
function TodoList() {

    var self = this;

    /** @type {Element} */
    var _taskBlock = document.getElementById('forTasks');

    /** @type int */
    var _taskNumberId = 0;

    TodoList.prototype.setTaskNumberId = function () {
        _taskNumberId++;
    };

    /** @returns {Number} */
    TodoList.prototype.getTaskNumberId = function () {
      return _taskNumberId;
    };

    /**
     * @param options
     * For adding new tasks
     */
    TodoList.prototype.addTask = function () {

        self.setTaskNumberId();

        /** @type {string} */
        var taskId = 'Task' + self.getTaskNumberId();

        // Create <li> element for adding task to list;
        var taskBlock = document.createElement('li');

        taskBlock.className = 'list-group-item task-item';

        taskBlock.id = taskId;

        // Add done and delete buttons to added task
        taskBlock.innerHTML = document.getElementById('inputTask').value;

        // Add delete button
        var taskButtonDel = document.createElement('span');
        taskButtonDel.className = 'glyphicon glyphicon-trash pull-right';
        taskButtonDel.setAttribute('onclick', "list.handlingTask({action: 'delete', currentId: " + taskId + "})" );

        // Add done button
        var taskButtonDone = document.createElement('span');
        taskButtonDone.className = 'glyphicon glyphicon-ok pull-right';
        taskButtonDone.setAttribute('onclick', "list.handlingTask({action: 'done', currentId: " + taskId + "})" );

        // Insert buttons on page
        taskBlock.appendChild(taskButtonDel);
        taskBlock.appendChild(taskButtonDone);

        // Checking for correct input
        if (document.getElementById('inputTask').value != ''){
            _taskBlock.appendChild(taskBlock);
            document.getElementById('inputTask').value = '';
        }
    };

    /**
     * @param options
     * For deleting tasks
     */
    TodoList.prototype.handlingTask = function (options) {

        switch(options.action) {
            case 'done':
            document.getElementById(options.currentId.id).setAttribute('style', 'text-decoration: line-through;')
                break;

            case 'delete':
            _taskBlock.removeChild(document.getElementById(options.currentId.id));
                break;

            default:
        }
    };
};

