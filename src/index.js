import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Sergio from './components/Sergio'
import ButtonCounter from './components/ButtonCounter'
import ListaOgg from './components/ListaOgg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

ReactDOM.render(<App />, document.getElementById('rot'));
ReactDOM.render(<Sergio titolo="titoloprops" welcome="welcomeprops"/>,document.getElementById('serge'));
ReactDOM.render(<ButtonCounter/>,document.getElementById('BC'));
ReactDOM.render(<ListaOgg/>,document.getElementById('liO'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
