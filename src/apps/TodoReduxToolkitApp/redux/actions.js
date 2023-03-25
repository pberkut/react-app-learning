import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
// import { nanoid } from 'nanoid';

// export const addTask = text => {
//   return {
//     type: 'tasks/addTask',
//     payload: {
//       id: nanoid(2),
//       completed: false,
//       text,
//     },
//   };
// };

const addTask = createAction('tasks/addTask', text => {
  return {
    payload: {
      text,
      id: nanoid(2),
      completed: false,
    },
  };
});

// export const deleteTask = taskId => {
//   return {
//     type: 'tasks/deleteTask',
//     payload: taskId,
//   };
// };

const deleteTask = createAction('tasks/deleteTask');

// export const toggleCompleted = taskId => {
//   return {
//     type: 'tasks/toggleCompleted',
//     payload: taskId,
//   };
// };

const toggleCompleted = createAction('tasks/toggleCompleted');

// export const setStatusFilter = value => {
//   return {
//     type: 'filters/setStatusFilter',
//     payload: value,
//   };
// };

const setStatusFilter = createAction('filters/setStatusFilter');

export { addTask, deleteTask, toggleCompleted, setStatusFilter };
