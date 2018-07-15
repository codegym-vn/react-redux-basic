import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './src/store';
import Home from './src/components/home';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Home />
            </Provider>
        );
    }
}