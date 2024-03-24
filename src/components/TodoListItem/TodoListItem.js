import React, { Component } from 'react';

import './TodoListItem.css';

export default class TodoListItem extends Component {
    render() {
        const { label, done, important,
                onDone, onImportant, onDelete } = this.props;

        let classNames = 'todo-list-item';
        if (important) {
            classNames += ' important'
        }
        if (done) {
            classNames += ' done'
        }
    
        return (
            <div>
                <span
                    className={classNames}
                    onClick={ () => onDone() }>
                        {label}
                </span>
                <button onClick={ () => onImportant() }>Important</button>
                <button onClick={ () => onDelete() }>Delete</button>
            </div>
        );
    }
};
