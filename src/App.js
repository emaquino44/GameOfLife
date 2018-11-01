import React, { Component } from 'react';
import './App.css';
import Grid from './Components/Grid';
import home from './Components/home';
import { Route } from "react-router-dom";



class App extends Component {

    render() {
        return (
            <div className="App">
                <Route exact path='/' component={home} />
                <Route path='/Grid' component={Grid} />

            </div>
        );
    }
}
export default App;
