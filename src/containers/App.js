import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        return <h1>Evaluagent</h1>;
    }
}

function select(state) {
    return {};
}

export default connect(select)(App);