import { ADD_TASK, UPDATE_TASK, DELETE_TASK, DELETE_TASKS, TOGGLE_ALL_TASKS, CLEAR_COMPLETED } from './constants';

export const addTask = (task) => {
    return {
        type: ADD_TASK,
        payload: task,
    };
};

export const updateTask = (values, index) => {
    return {
        type: UPDATE_TASK,
        payload: {
            index,
            values,
        },
    };
};

export const deleteTask = (index) => {
    return {
        type: DELETE_TASK,
        payload: index,
    };
};

export const deleteTasks = (indexArr) => {
    return {
        type: DELETE_TASKS,
        payload: indexArr,
    };
};

export const toggleAllTasks = () => {
    return {
        type: TOGGLE_ALL_TASKS,
    };
};

export const clearCompleted = () => {
    return {
        type: CLEAR_COMPLETED,
    };
};
