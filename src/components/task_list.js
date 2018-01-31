import React, { Component } from 'react';

const TaskList = props => {
  return (
    <ul>
      {props.task.map((todo, i) => {
        return (
          <li>
            {todo} <button onClick={() => props.delete(i)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
