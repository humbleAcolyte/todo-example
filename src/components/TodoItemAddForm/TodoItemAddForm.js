import React, {Component} from 'react';

export default class TodoItemAddForm extends Component {
    
    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.label);
        this.setState({
            label: ''
        });
    };

    render() {
        return (
            <form onSubmit={ this.onSubmit }>
                <input type="text"
                       onChange={ this.onLabelChange }
                       placeholder="New To-Do"
                       value={ this.state.label }/>
                <button>Add</button>
            </form>
        );
    };
};