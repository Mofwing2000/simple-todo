import { useContext, useState } from 'react';
import TaskHeader from './components/TaskHeader';
import TaskItem from './components/TaskItem';
import Context from './Context';
import { addTask, deleteTask, toggleAllTasks, updateTask } from './actions';
import { useParams } from 'react-router-dom';

import './App.css';
import TaskFooter from './components/TaskFooter';

function App() {
    const [state, dispatch] = useContext(Context);
    const [task, setTask] = useState('');
    const isCompletedAll = state.every((task) => task.isCompleted === true);
    const taskNumber = state.length;
    const { filter } = useParams();
    console.log(filter);
    const handleTaskHeaderKeyPress = (e) => {
        if (e.charCode === 13) {
            if (e.target.value) {
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

    const handleDeleteIconClick = (e, index) => {
        dispatch(deleteTask(index));
    };

    const handleTaskInputOnInput = (e, index) => {
        dispatch(updateTask({ title: e.target.value }, index));
    };

    const handleTaskInputOnBlur = (e, index) => {
        if (!e.target.value) dispatch(deleteTask(index));
    };

    const handleTaskInputOnKeyPress = (e, index) => {
        if (e.charCode === 13) {
            if (!e.target.value) dispatch(deleteTask(index));
        }
    };

    const handleArrowBtnOnClick = (e) => {
        dispatch(toggleAllTasks());
    };

    return (
        <div className="App pt-10">
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
                    {state.map((task, index) => (
                        <li key={index}>
                            <TaskItem
                                taskTitle={task.title}
                                checked={task.isCompleted}
                                taskCheckboxOnChange={(e) => handleTaskCheckboxOnChange(e, index)}
                                deleteIconClick={(e) => handleDeleteIconClick(e, index)}
                                taskInputOnInput={(e) => handleTaskInputOnInput(e, index)}
                                taskInputOnBlur={(e) => handleTaskInputOnBlur(e, index)}
                                taskInputOnKeyPress={(e) => handleTaskInputOnKeyPress(e, index)}
                                taskFilter={filter}
                            />
                        </li>
                    ))}
                </ul>
                <TaskFooter isCompletedAll={isCompletedAll} taskNumber={taskNumber}></TaskFooter>
            </div>
        </div>
    );
}

export default App;
