import React, { Component } from 'react';
import {Button, Icon, Row, Col, Navbar, NavItem } from 'react-materialize';
import { Link, withRouter, Redirect } from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            toLoginPage: false,
        }
    }
     onLogout() {
         console.log("trygin to logout");
         console.log(this.props.history);
         this.props.history.push("/");
    }
    render(){
        return(
            <React.Fragment>
            <Navbar brand='bw' right>
                <NavItem href='#'><Icon>account_circle</Icon></NavItem>
                <NavItem href='#' onClick={this.onLogout.bind(this)}><Icon>logout</Icon></NavItem>
            </Navbar>
            </React.Fragment>
        );
    }
}
export default Header
