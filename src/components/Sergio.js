import React, { Component } from 'react';
import AppHeader from './AppHeader' ;


class Sergio extends Component {
    
    constructor(){
        super();
        this.state= {
            counter:9
        };
        
    }

    increm =() =>{
        this.setState({
counter: this.state.counter +1
        });
        
    };
    
  
  render() {
      console.log(this.props);
      const tit=this.props.titolo;
      const wel=this.props.welcome;
      const {counter} = this.state;
    return (
      <div className="Sergio">
      <AppHeader titulo={tit}/>
      <button type="button" class="btn btn-danger" onClick={this.increm}>vendi</button>
      <h3>qty :{tit+"  "+wel}</h3>
        sergio 
        <span> contatore=</span>
        <span>{counter}</span>
      </div>
    );
  }
}

export default Sergio;