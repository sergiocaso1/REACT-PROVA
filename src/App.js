import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  funcia() {
    return alert(" hai comprato");
    
  }
    
  
  render() {
    return (
      <div className="container-fluid">
      <button type="button" class="btn btn-primary" onClick={this.funcia}><h5>compra</h5></button>
      

       <h3>app</h3> 
      </div>
    );
  }
}

export default App;
