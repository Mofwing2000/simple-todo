import React from 'react';

const Button = (props) => {
    const { children, onClick, hoverUnderline, className } = props;
    return (
        <button className={`cursor-pointer	${hoverUnderline ? 'hover:underline' : ''} ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
