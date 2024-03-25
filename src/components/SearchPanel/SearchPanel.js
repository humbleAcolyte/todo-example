import React, { Component } from "react";

export default class SearchPanel extends Component {

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
        this.props.onFilter(this.state.label);
    };

    render() {
        return (
            <form onSubmit={ this.onSubmit }>
                <input type="text"
                       onChange={ this.onLabelChange }
                       placeholder="To-Do"
                       value={ this.state.label }/>
                <button>Find</button>
            </form>
        );
    };
};
