import React, { Component } from 'react';
import Header from './Header';
import { BrowserRouter, Route, Redirect, hashHistory, Link, withRouter } from 'react-router-dom';
import {Button, Icon, Card, Row, Col, Input } from 'react-materialize';
import { connect } from 'react-redux';

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {}
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    onChangeHandler(event){
        //const { target: { name, value } } = event
        this.setState({ [event.target.name]: event.target.value })
        // this.setState({
        //     username: e.target.value
        // })
    }
    
    render(){
        const Button = withRouter(({ history }) => (
            <button className="btn" type='button' onClick={
                () => { 
                    {/*history.push('/about') }*/}
                    try{
                            var radioVal = document.querySelector('input[name="empOrManager"]:checked').value;
                            console.log("radio button value: ", radioVal);
                            this.props.add(this.state); 
                            if(radioVal === "manager"){
                                //console.log("manager selected");
                                if(this.state.username === this.props.login.manager.user && 
                                this.state.password === this.props.login.manager.password && 
                                this.state.empOrManager === this.props.login.manager.emp){
                                    console.log("good to go");
                                    history.push('/todos/manager');
                                }else{
                                    alert("please select a valid credential");
                                }
                            }else if(radioVal === "employee"){
                                //console.log("employee selected");
                                if(this.state.username === this.props.login.emp.user && 
                                this.state.password === this.props.login.emp.password && 
                                this.state.empOrManager === this.props.login.emp.emp){
                                    console.log("good to go employee");
                                    history.push('/todos/employee');
                                }else{
                                    alert("please select a valid credential");
                                }
                            }
                            console.log("data from the store: ", this.props);
                            this.setState({});
                        }catch(err){
                            alert("please fill all fields");
                            {/*console.log(err);*/}
                        }
                    }
            }>
                Login
            </button>
            ))
        return(
            <div style={{"marginTop":"40px", "minHeight":"500px","textAlign":"center"}}>
                <Row >
                    <h4 style={{"color":"#969696"}}>Login as: </h4>
                    <Row style={{"textAlign":"center"}}>
                        <Input name='empOrManager' type='radio' value='employee' label='employee' onChange={this.onChangeHandler}/>
                        <Input name='empOrManager' type='radio' value='manager' label='manager' onChange={this.onChangeHandler}/>
                    </Row>
                    <Row>
                        {/*this is an example of pulling data from redux store*/}
                        {/*<div>a</div>
                        <div>{this.props.login.password}</div>*/}
                        <Input name="username" placeholder="user name" m={12} label="User Name" onChange={this.onChangeHandler}/>
                        <Input name="password" type="password" label="password" m={12} onChange={this.onChangeHandler}/>
                        {/*<Link to="/about">About</Link>*/}
                        <Button />
                    </Row>
                </Row>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    return{
        login: state.login
    }
}

function mapDispatchToProps(dispatch){
    return{
        add: (value) => {
            dispatch({type:'ADD', payload: value})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
