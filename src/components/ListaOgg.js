import React,{Component} from "react";
import { from } from "rxjs";

class ListaOgg extends React.Component {

    constructor(){
        super();
        this.state={
            oggetti:[{id:0,name:'ogg1'},{id:1,name:'ogg2'},{id:2,name:'ogg3'}],
            howmany: 0   
        };
    }

    componentDidMount(){
        var f;
    var i =   setInterval(() => {
            const n=this.state.howmany
f=n
this.setState({
oggetti:[...this.state.oggetti,{id:n+1,name:n+1}],
howmany: n+1,

});
console.log("fserg="+n+f)

if(f>9){
    clearInterval(i);
    alert("terminato con f:"+f)


}

        },2000);
        
        //
       
    }
render(){

    const listaOggetti = this.state.oggetti;
    const listaOggettiJSX = listaOggetti.map((o) => <li key={o.id}>{o.name}</li>)
    return(
        
        
        <ul>
        {listaOggettiJSX}
    </ul>
    
    );

}
}

export default ListaOgg;

