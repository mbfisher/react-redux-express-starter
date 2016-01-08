import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import Greeting from '../components/Greeting';
import { greet } from '../redux/actions';

class App extends Component {
    render() {
        const { dispatch } = this.props;

        return <Greeting greeting={this.props.greeting} onSayHello={() => dispatch(greet('Hello!'))}/>;
    }
}

function select(state) {
    return state;
}

App = connect(select)(App);

App.create = (store) => {
    return <Provider store={store}><App/></Provider>;
};

export default App;


