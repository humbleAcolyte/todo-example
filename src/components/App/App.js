import React, { Component } from "react";

import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import TodoList from "../TodoList";
import TodoItemAddForm from "../TodoItemAddForm";

import './App.css';

export default class App extends Component {

    nextId = 1;

    state = {
        todoData: []
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
        this.setState(({todoData}) => {
            const newItem = this.createItem(label);
            return {
                todoData: [...todoData, newItem]
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
        this.setState(({ todoData }) => {
            const ind = todoData.findIndex((el) => el.id === id);
            const changedData = [
                ...todoData.slice(0, ind),
                ...todoData.slice(ind + 1)
            ];
            
            return {
                todoData: changedData
            };
        });
    };

    render() {
        return (
            <div className='app'>
                <AppHeader />
                <SearchPanel />
                <TodoList
                  items={this.state.todoData}
                  onDone={ this.setItemDone }
                  onImportant={ this.setItemImportant }
                  onDelete={ this.deleteItem } />
                <TodoItemAddForm
                    onAdd={ this.addItem }
                />
            </div>
        );
    };
};