import React, { Component } from 'react';
import Topbar from '../topbar/Topbar';
import Order from '../order/Order';
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app-container">
                <Topbar />
                <Order />
            </div>
        )
    }
};

export default App;