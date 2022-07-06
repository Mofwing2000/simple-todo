import React from 'react';

const TaskHeader = (props) => {
    const { onHeaderKeyPress, task, onHeaderChange, arrowBtnOnClick, taskNumber, isCompletedAll } = props;

    return (
        <div
            className={`task-header relative p-4 flex justify-between items-center ${
                taskNumber > 0 ? 'border-b border-solid border-gray-200' : ''
            }`}
        >
            <i
                className={`fa-solid fa-chevron-down ${taskNumber === 0 ? 'hidden' : 'absolute left-5'} text-xl ${
                    isCompletedAll ? '' : 'text-gray-300'
                }`}
                onClick={arrowBtnOnClick}
            ></i>
            <input
                className="outline-none flex-1 text-inputHeader ml-14 placeholder-italic placeholder-gray"
                placeholder="What needs to be done?"
                value={task}
                onChange={onHeaderChange}
                onKeyPress={onHeaderKeyPress}
            />
        </div>
    );
};

export default TaskHeader;
