import React, { Component } from 'react';




class AppHeader extends React.Component {
    render(){
        console.log(this.props);
        const {titulo} = this.props;
        return <h3>HEADER  {titulo}</h3>
    }
}

export default AppHeader;