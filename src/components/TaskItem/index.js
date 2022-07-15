import React, { useRef, memo } from 'react';
import Button from '../Button';

const TaskItem = (props) => {
    const {
        taskTitle,
        checked,
        taskCheckboxOnChange,
        taskInputOnBlur,
        taskInputOnInput,
        taskInputOnKeyPress,
        deleteIconClick,
        taskFilter,
    } = props;
    const taskInputRef = useRef();
    const taskItemRef = useRef();
    let isRender = true;

    const handleTaskDoubleClick = () => {
        setEditing();
        taskInputRef.current.focus();
    };

    const setEditing = () => {
        taskItemRef.current.classList.add('hidden');
        taskItemRef.current.classList.remove('flex');

        taskInputRef.current.classList.add('flex');
        taskInputRef.current.classList.remove('hidden');
    };

    const setEditingDone = () => {
        taskItemRef.current.classList.add('flex');
        taskItemRef.current.classList.remove('hidden');

        taskInputRef.current.classList.add('hidden');
        taskInputRef.current.classList.remove('flex');
    };

    switch (taskFilter) {
        case 'active': {
            if (!checked) isRender = true;
            else isRender = false;
            break;
        }
        case 'completed': {
            if (checked) isRender = true;
            else isRender = false;
            break;
        }
        default:
            isRender = true;
    }

    return (
        <div className={`flex items-center border-b border-solid border-gray-200 ${isRender ? 'flex' : 'hidden'}`}>
            <div
                className="task-item relative flex justify-between items-center w-full py-[15px] pl-2 pr-4 group "
                ref={taskItemRef}
                onDoubleClick={handleTaskDoubleClick}
            >
                <input
                    className={`flex justify-center items-center absolute left-3 inline-block w-8 h-8 outline-none rounded-full appearance-none ${
                        checked
                            ? `completed border-slate-300 border-solid border after:content-['✔'] after:text-green-300 after:flex after:justify-center after:items-center after:text-2xl`
                            : `border-solid border-slate-200 border`
                    }`}
                    type="checkbox"
                    defaultChecked={checked}
                    onChange={taskCheckboxOnChange}
                />
                <p
                    className={`ml-16 flex-1 text-left text-taskItem transition-all duration-300 ${
                        checked ? 'text-gray-300 line-through' : ''
                    }`}
                >
                    {taskTitle}
                </p>
                <Button>
                    <i
                        className="task-delete fa-solid fa-x hidden text-customPastel font-black group-hover:inline"
                        onClick={deleteIconClick}
                    ></i>
                </Button>
            </div>
            <input
                className="task-edit hidden box-border justify-center items-center ml-14 mr-0.5 h-full w-full text-taskItem px-4 py-[14.5px] outline-none border-solid border-gray-400 border shadow-customInner"
                ref={taskInputRef}
                defaultValue={taskTitle}
                onInput={(e) => {
                    taskInputOnInput(e);
                }}
                onBlur={(e) => {
                    taskInputOnBlur(e);
                    setEditingDone();
                }}
                onKeyPress={(e) => {
                    taskInputOnKeyPress(e);
                    if (e.charCode === 13) {
                        setEditingDone();
                    }
                }}
            />
        </div>
    );
};

export default memo(TaskItem);
