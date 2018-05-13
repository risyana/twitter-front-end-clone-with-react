import React, { Component } from 'react';
import Header from '../Header/Header'

class Layout extends Component {
    render(){
        return(
            <div>
                <Header/>
                <div>side bar left</div>
                <div>
                    {this.props.children}
                </div>
                <div>side bar rigth</div>
            </div>
        )
    }
}

export default Layout;