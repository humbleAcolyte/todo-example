import React from 'react';

import TodoListItem from '../TodoListItem';
import './TodoList.css';

const TodoList = ({items, onDone, onImportant, onDelete}) => {
    const elements = items.map((item) => {
        const {id, ...itemData} = item;
        return (
            <li key={id} className='list-group-item'>
                <TodoListItem 
                  {...itemData}
                  onDone={() => onDone(id)}
                  onImportant={() => onImportant(id)}
                  onDelete={() => onDelete(id)}
                />
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};

export default TodoList;