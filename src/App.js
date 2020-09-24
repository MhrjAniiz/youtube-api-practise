
import "./App.css";
import Header from "./components/navbar/Header";
import Home from './components/Home.js'
import Search from './components/search/Search'
import {  Route, Switch } from "react-router-dom";
import React, { Component } from 'react'


export default class App extends Component {
 render() {
    return (
    
        <>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/result/:slug" component={Search} />
        
        </Switch>
    </>

    )
  }
}


