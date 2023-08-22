import React, { useState } from 'react';

function AddTaskForm({ onAddTask }) {//onAddTask- prop
  const [newTask, setNewTask] = useState('');

  // Function to handle input change
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  // Function to handle adding a new task
  const handleAddClick = () => {
    if (newTask.trim() !== '') {
      onAddTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
}

export default AddTaskForm;
