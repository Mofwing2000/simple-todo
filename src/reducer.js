import { ADD_TASK, DELETE_TASK, DELETE_TASKS, UPDATE_TASK, TOGGLE_ALL_TASKS } from './constants';

export const taskList = [
    {
        title: 'Code',
        isCompleted: false,
    },
    {
        title: 'Code sdfasd',
        isCompleted: true,
    },
];

const reducer = (state = taskList, action) => {
    switch (action.type) {
        case ADD_TASK: {
            return [
                ...state,
                {
                    ...action.payload,
                },
            ];
        }
        case UPDATE_TASK: {
            console.log(action.payload.index);
            const updatedTask = {
                ...state[action.payload.index],
                ...action.payload.values,
            };
            const newTasksState = [...state];
            newTasksState.splice(action.payload.index, 1, updatedTask);
            return [...newTasksState];
        }
        case DELETE_TASK: {
            const newTasksState = [...state];
            newTasksState.splice(action.payload, 1);
            return [...newTasksState];
        }
        case DELETE_TASKS: {
            const newTasksState = state.filter((task, index) => !action.payload.includes(index));
            return [...newTasksState];
        }
        case TOGGLE_ALL_TASKS: {
            const newTasksState = [...state];
            const isCompletedAll = newTasksState.every((task) => task.isCompleted === true);
            if (isCompletedAll) newTasksState.forEach((task) => (task.isCompleted = false));
            else newTasksState.forEach((task) => (task.isCompleted = true));
            return [...newTasksState];
        }
        default:
            return [...state];
    }
};
export default reducer;
