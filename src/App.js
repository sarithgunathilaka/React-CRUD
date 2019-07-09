import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Students from './Components/Students'
import Courses from './Components/Courses'
import Test from './Components/test'
import Errorr from './Components/Error'
import Navigation from './Components/Navigation'
import './App.css';

export default class App extends Component {
  render() {
    return (
      
        <BrowserRouter>
        <Navigation/>
          <Switch>
            <Route path="/" component={Courses} exact/>
            <Route path="/students" component={Students}/>
            <Route path="/test" component={Test}/>
            <Route component={Errorr} exact/>
          </Switch>
        </BrowserRouter>
      
    ) 
  }
}
