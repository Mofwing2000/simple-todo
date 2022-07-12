import { useContext, useState, useCallback, useMemo } from 'react';
import TaskHeader from './components/TaskHeader';
import TaskItem from './components/TaskItem';
import Context from './Context';
import { addTask, deleteTask, toggleAllTasks, updateTask, clearCompleted } from './store/actions';
import { useParams } from 'react-router-dom';

import './App.css';
import TaskFooter from './components/TaskFooter';

function App() {
    const [state, dispatch] = useContext(Context);
    const [task, setTask] = useState('');
    const isCompletedAll = state.every((task) => task.isCompleted === true);
    const taskNumber = state.length;
    const { filter } = useParams();
    const handleTaskHeaderKeyPress = (e) => {
        if (e.charCode === 13) {
            if (e.target.value.trim() && !state.find((task) => task.title === e.target.value.trim())) {
                dispatch(
                    addTask({
                        title: task,
                        isCompleted: false,
                    }),
                );
                setTask('');
            }
        }
    };

    const handleTaskHeaderChange = (e) => {
        setTask(e.target.value);
    };

    const handleTaskCheckboxOnChange = (e, index) => {
        dispatch(updateTask({ isCompleted: e.target.checked }, index));
    };

    const handleDeleteIconClick = (index) => {
        dispatch(deleteTask(index));
    };

    const handleTaskInputOnInput = (e, index) => {
        dispatch(updateTask({ title: e.target.value }, index));
    };

    const handleTaskInputOnBlur = (e, index) => {
        if (!e.target.value.trim()) dispatch(deleteTask(index));
    };

    const handleTaskInputOnKeyPress = (e, index) => {
        if (e.charCode === 13) {
            if (!e.target.value.trim()) dispatch(deleteTask(index));
        }
    };

    const handleArrowBtnOnClick = () => {
        dispatch(toggleAllTasks());
    };

    const handleClearAllClick = () => {
        dispatch(clearCompleted());
    };

    return (
        <div className="App">
            <h1 className="text-[#af2f2f26] text-center text-[100px] font-thin leading-none mt-4 mb-3">todos</h1>
            <div className="wrapper mx-auto shadow-custom w-96 w-appWidth">
                <TaskHeader
                    onHeaderKeyPress={handleTaskHeaderKeyPress}
                    task={task}
                    onHeaderChange={handleTaskHeaderChange}
                    arrowBtnOnClick={handleArrowBtnOnClick}
                    taskNumber={taskNumber}
                    isCompletedAll={isCompletedAll}
                ></TaskHeader>
                <ul>
                    {useMemo(() => {
                        return state.map((task, index) => (
                            <li key={index}>
                                <TaskItem
                                    taskTitle={task.title}
                                    checked={task.isCompleted}
                                    taskCheckboxOnChange={(e) => handleTaskCheckboxOnChange(e, index)}
                                    deleteIconClick={() => handleDeleteIconClick(index)}
                                    taskInputOnInput={(e) => handleTaskInputOnInput(e, index)}
                                    taskInputOnBlur={(e) => handleTaskInputOnBlur(e, index)}
                                    taskInputOnKeyPress={(e) => handleTaskInputOnKeyPress(e, index)}
                                    taskFilter={filter}
                                />
                            </li>
                        ));
                    })}
                </ul>
                {
                    <TaskFooter
                        isCompletedAll={isCompletedAll}
                        activeTaskNumber={state.filter((task) => !task.isCompleted).length}
                        clearBtnOnClick={handleClearAllClick}
                    ></TaskFooter>
                }
            </div>
        </div>
    );
}

export default App;

//Note: Xuwr lys o copmonent day vao store
