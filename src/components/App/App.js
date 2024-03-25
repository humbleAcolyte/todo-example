import React, { Component } from "react";

import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import TodoList from "../TodoList";
import TodoItemAddForm from "../TodoItemAddForm";

import './App.css';

export default class App extends Component {

    nextId = 1;

    state = {
        todoData: [],
        filter: ''
    };

    createItem = (label) => {
        return {
            id: this.nextId++,
            label,
            done: false,
            important: false
        };
    };

    addItem = (label) => {
        this.setState(({todoData, ...stuff}) => {
            const newItem = this.createItem(label);
            return {
                todoData: [...todoData, newItem],
                stuff
            };
        });
    };

    setItemFlag = (arr, id, propName) => {
        const ind = arr.findIndex((el) => el.id === id);
        const oldItem = arr[ind];
        const changedItem = {
            ...oldItem,
            [propName]: !oldItem[propName]
        };

        return [
            ...arr.slice(0, ind),
            changedItem,
            ...arr.slice(ind + 1)
        ];
    };

    setItemDone = (id) => this.setState(({ todoData }) => {
        return {
            todoData: this.setItemFlag(todoData, id, 'done')
        };
    });

    setItemImportant = (id) => this.setState(({ todoData }) => {
        return {
            todoData: this.setItemFlag(todoData, id, 'important')
        };
    });

    deleteItem = (id) => {
        this.setState(({ todoData, ...stuff }) => {
            const ind = todoData.findIndex((el) => el.id === id);
            const changedData = [
                ...todoData.slice(0, ind),
                ...todoData.slice(ind + 1)
            ];
            
            return {
                todoData: changedData,
                stuff
            };
        });
    };

    setFilter = (filter) => {
        this.setState((state) => {
            return {
                state,
                filter
            };
        });
    };

    filterItems = (items, filter) => {
        let filtered = items;
        if (filter !== '') {
            filtered = filtered
                       .filter(({ label }) => label.startsWith(filter));
        }
        return filtered;
    };

    render() {
        const items = this.state.todoData;
        const itemCount = items.length;
        const doneCount = items
                          .filter(({ done }) => done)
                          .length;

        const filtered = this.filterItems(items, this.state.filter);

        return (
            <div className='app'>
                <AppHeader itemCount={itemCount}
                           doneCount={doneCount} />
                <SearchPanel onFilter={this.setFilter} />
                <TodoList
                  items={filtered}
                  onDone={this.setItemDone}
                  onImportant={this.setItemImportant}
                  onDelete={this.deleteItem} />
                <TodoItemAddForm
                    onAdd={this.addItem}
                />
            </div>
        );
    };
};