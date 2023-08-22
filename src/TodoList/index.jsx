import React, { useState } from 'react';
import TaskList from '../TaskList';
import AddTaskForm from '../AddTaskForm';


function TodoList() {
  const [tasks, setTasks] = useState([]);//this will hold the array of tasks

 //adds the new task with desription by taking it as argument 
  const handleAddTask = (newTask) => {
    setTasks([...tasks, { text: newTask, completed: false }]);
  };

//it is fired when the user clicks on the checkbox
  const handleToggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

//fires when the user clicks on the delete button
  const handleDeleteTask = (index) => {
    //represents it is being ignored
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
       <AddTaskForm onAddTask={handleAddTask} /> {/*onAddTask- custom event, 1st one to execute */}
      <TaskList
        tasks={tasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default TodoList;

