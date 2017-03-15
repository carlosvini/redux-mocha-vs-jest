import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class WelcomePage extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.props.formText);
    };

    render() {
        const listItems = this.props.languages.map((language, key) =>
            <li key={key}>{language}</li>
        );

        return (
            <form onSubmit={this.handleSubmit} className="WelcomePage">
                <div>Welcome! Example list of languages:</div>
                <ul>
                    {listItems}
                </ul>
                <input type="text" value={this.props.formText} onChange={(e) => this.props.setFormText(e.target.value)} />
                <button action="submit">Add</button>
            </form>
        );

    }
}

function mapStateToProps(state) {
    return {
        languages: state.languages,
        formText: state.formText
    };
}

export default connect(mapStateToProps, actions)(WelcomePage);