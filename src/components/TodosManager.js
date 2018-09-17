import React, { Component } from 'react';
import {Button, Icon, Row, Col, Navbar, NavItem,Table } from 'react-materialize';
import { BrowserRouter, Route, Redirect, hashHistory, Link, withRouter } from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';

class Todos extends Component{
        constructor(props){
        super(props)
        this.state = this.props.login;
    }
    deleteTodoHandler(rowid){
        console.log("log out the id of the clicked delete button: ",rowid);
        console.log(this.state);
        var removetodos = this.state.todos.filter((row)=>{
            return row.id !== rowid;
        })
        console.log("remove todos: ", removetodos);
        this.setState({...this.state.todos, todos: removetodos});
        console.log(this.state);
        this.props.deleteTodo(this.state);
    }
    render(){
        const Button = withRouter(({ history }) => (
            <button className="btn green" type='button' onClick={
                () => { 
                    try{
                        history.push('/create');
                    }catch(e){
                        console.log(e);
                    }
                    }
            }>
                Create
            </button>
            ))
        console.log("after assigning state: ", this.state);
        const todosRows = this.state.todos.map((row)=>{
            return(
                <tr key={row.id}>
                    <td>{row.id}</td>    
                    <td>{row.title}</td>    
                    <td>{row.status}</td>  
                    <td><i style={{"cursor":"pointer"}} 
                    className="material-icons" id={row.id} 
                    onClick={()=>{this.deleteTodoHandler(row.id)}}>delete</i>
                    </td>  
                </tr>
            );
        });
        console.log("state inside todos from redux: ", this.props);
        return(
            <React.Fragment>
                <Header />
                <div className="container">
                    <Table>
                    <thead>
                        <tr>
                        <th data-field="id">id</th>
                        <th data-field="title">title</th>
                        <th data-field="status">status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {todosRows}
                    </tbody>
                    </Table>
                    <Row>
                        <Button />
                    </Row>
                </div>
                
            </React.Fragment>
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
        deleteTodo:(value)=>{
            dispatch({type:'DELETE', payload: value})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)