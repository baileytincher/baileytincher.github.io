import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import NSlit from './NSlit/NSlit';

export default class Content extends Component {
    render () {
        return (
            <Switch>
                <Route exact path="/" component = {Home}/>
                <Route path="/home" component = {Home}/>
                <Route path="/nslit" component = {NSlit}/>
            </Switch>
        )
    }
};
