import { ADD_TASK, DELETE_TASK, DELETE_TASKS, UPDATE_TASK, TOGGLE_ALL_TASKS, CLEAR_COMPLETED } from './constants';

const TODO_LOCAL_STORAGE = 'TODO_LOCAL_STORAGE';

export const taskList = JSON.parse(localStorage.getItem(TODO_LOCAL_STORAGE)) || [];

const reducer = (state = taskList, action) => {
    switch (action.type) {
        case ADD_TASK: {
            const newTasksState = [
                ...state,
                {
                    ...action.payload,
                },
            ];
            localStorage.setItem(TODO_LOCAL_STORAGE, JSON.stringify([...newTasksState]));
            return [...newTasksState];
        }
        case UPDATE_TASK: {
            const updatedTask = {
                ...state[action.payload.index],
                ...action.payload.values,
            };
            const newTasksState = [...state];
            newTasksState.splice(action.payload.index, 1, updatedTask);
            localStorage.setItem(TODO_LOCAL_STORAGE, JSON.stringify([...newTasksState]));
            return [...newTasksState];
        }
        case DELETE_TASK: {
            const newTasksState = [...state];
            newTasksState.splice(action.payload, 1);
            localStorage.setItem(TODO_LOCAL_STORAGE, JSON.stringify([...newTasksState]));
            return [...newTasksState];
        }
        case DELETE_TASKS: {
            const newTasksState = state.filter((task, index) => !action.payload.includes(index));
            localStorage.setItem(TODO_LOCAL_STORAGE, JSON.stringify([...newTasksState]));
            return [...newTasksState];
        }
        case TOGGLE_ALL_TASKS: {
            // ***Note: Not pure -> Cause side effect when enable strict mode
            // const newTasksState = [...state];
            // const isCompletedAll = newTasksState.every((task) => task.isCompleted === true);
            // if (isCompletedAll) newTasksState.forEach((task) => (task.isCompleted = false));
            // else newTasksState.forEach((task) => (task.isCompleted = true));
            // return [...newTasksState];

            const isCompletedAll = state.every((task) => task.isCompleted === true);
            if (isCompletedAll) {
                const newTasksState = state.map((task) => {
                    return { ...task, isCompleted: false };
                });
                localStorage.setItem(TODO_LOCAL_STORAGE, JSON.stringify([...newTasksState]));
                return [...newTasksState];
            } else {
                const newTasksState = state.map((task) => {
                    return { ...task, isCompleted: true };
                });
                localStorage.setItem(TODO_LOCAL_STORAGE, JSON.stringify([...newTasksState]));
                return [...newTasksState];
            }
        }
        case CLEAR_COMPLETED: {
            const newTasksState = state.filter((task) => !task.isCompleted);
            return [...newTasksState];
        }
        default:
            localStorage.setItem(TODO_LOCAL_STORAGE, JSON.stringify([...state]));
            return [...state];
    }
};
export default reducer;
