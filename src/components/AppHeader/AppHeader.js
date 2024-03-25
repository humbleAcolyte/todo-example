import React from "react";

import './AppHeader.css';

const AppHeader = ({ itemCount = 0, doneCount = 0 }) => {
    const undoneCount = itemCount - doneCount;

    return (
        <div className='app-header'>
            <h1>To-Do List</h1>
            <div>
                <span>{undoneCount}</span>
                <span>{doneCount}</span>
                <span>{itemCount}</span>
            </div>
        </div>
    );
};

export default AppHeader;