import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button';
const TaskFooter = (props) => {
    const { isCompletedAll, taskNumber, clearBtnOnClick } = props;
    const filterOpts = [
        {
            filterName: 'All',
            location: '/',
        },
        {
            filterName: 'Active',
            location: '/active',
        },
        {
            filterName: 'Completed',
            location: '/completed',
        },
    ];
    return (
        <div className="task-footer flex justify-center item-center p-2.5 text-base text-gray-400 relative">
            <span className="task-count absolute left-4">{taskNumber} items left</span>
            <ul className="flex gap-3">
                {filterOpts.map((filter, index) => (
                    <li key={index} className="">
                        <NavLink
                            className={({ isActive }) => {
                                return isActive
                                    ? 'border border-solid border-red-200 px-1.5 py-1 rounded'
                                    : 'px-1.5 py-1 rounded';
                            }}
                            to={`../${filter.location}`}
                        >
                            {filter.filterName}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <Button className="absolute right-4" hoverUnderline onClick={clearBtnOnClick}>
                Clear completed
            </Button>
            <div className="overlappe-page absolute -bottom-1.5 h-1.5 w-[calc(100%_-_10px)] bg-inherit shadow-custom"></div>
            <div className="overlappe-page absolute -bottom-3 h-1.5 w-[calc(100%_-_20px)] bg-inherit shadow-custom"></div>
        </div>
    );
};

export default TaskFooter;
// before:h-12 before:absolute before:bottom-0 before:left-0
