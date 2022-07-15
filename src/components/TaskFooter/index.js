import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button';
const TaskFooter = (props) => {
    const { activeTaskNumber, clearBtnOnClick, isNotCompleteAll } = props;
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
        <div className="task-footer flex justify-center item-center p-2.5 text-sm font-light text-gray-400 relative">
            <span className="task-count absolute left-4">{activeTaskNumber} items left</span>
            <ul className="flex gap-3">
                {filterOpts.map((filter, index) => (
                    <li key={index} className="">
                        <NavLink
                            className={({ isActive }) => {
                                return isActive
                                    ? 'border border-solid border-red-100 px-1.5 py-1 rounded'
                                    : 'px-1.5 py-0.5 rounded';
                            }}
                            to={`../${filter.location}`}
                        >
                            {filter.filterName}
                        </NavLink>
                    </li>
                ))}
            </ul>
            {!isNotCompleteAll && (
                <Button className="absolute right-4" hoverUnderline onClick={clearBtnOnClick}>
                    Clear completed
                </Button>
            )}
            <div className="overlappe-page absolute -bottom-[5px] h-[5px] w-[calc(100%_-_6px)] bg-inherit shadow-custom"></div>
            <div className="overlappe-page absolute -bottom-[10px] h-[5px] w-[calc(100%_-_12px)] bg-inherit shadow-custom"></div>
        </div>
    );
};

export default TaskFooter;
// before:h-12 before:absolute before:bottom-0 before:left-0
