import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import List from './components/List';
import Details from './components/Details';
import New from './components/New';
import './styles/style.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      
      <BrowserRouter>
      <div>
        <Route path='/list' component={List} />      
        <Route path='/details/:isbn' component={Details} />
        <Route path='/new' component={New} />   
      </div>   
      </BrowserRouter>
              
      </div>
    );
  }
}

export default App;
