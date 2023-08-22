import React from 'react';

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
    let textDecorationStyle = {textDecoration: 'none'};
    if (tasks.completed){
      textDecorationStyle = {textDecoration : 'line-through'};
    }
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleTask(index)}
          />
          <span style={ textDecorationStyle }>
            {task.text}
          </span>
          <button onClick={() => onDeleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;