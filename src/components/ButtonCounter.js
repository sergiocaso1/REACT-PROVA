import React,{Component} from 'react';
import { from } from "rxjs";
import 'bootstrap/dist/css/bootstrap.min.css' 

class ButtonCounter extends React.Component{
 constructor(){
     super();
      this.state = {
          counter: 0
      };
    }

    increm =() =>{
        this.setState({
            counter: this.state.counter +1.5
        })
    }

    render(){
        const {counter} = this.state;
        return (
            <div className="ButtonCounter">

            <button type="button" class="btn btn-secondary btn-lg" onClick={this.increm}>vendi</button>
            <h3>qty sergio</h3>
               
              <span> contatore=</span>
              <span>{counter}</span>
            </div>
          );
    }


}

export default ButtonCounter;