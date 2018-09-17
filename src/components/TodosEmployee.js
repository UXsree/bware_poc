import React, { Component } from 'react';
import {Button, Icon, Row, Col, Navbar, NavItem,Table } from 'react-materialize';
import { Link } from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';

class Todos extends Component{
        constructor(props){
        super(props)
        this.state = this.props.login;
    }

    handleProgress(e){ 
        var todosInprogress = this.props.login.todos.filter((row)=>{
            return row.status === 'inprogress';
        })
        console.log("sorted data: ", todosInprogress);
        this.setState({...this.state.todos, todos: todosInprogress});
    }

    handleAll(e){
        this.setState({...this.state.todos, todos:this.props.login.todos});
    }

    handleCompleted(e){
        var todosCompleted = this.props.login.todos.filter((row)=>{
            return row.status === 'completed';
        })
        this.setState({...this.state.todos, todos:todosCompleted});
    }

    render(){
        console.log("after assigning state: ", this.state);
        const todosRows = this.state.todos.map((row)=>{
            return(
                <tr key={row.id}>
                    <td>{row.id}</td>    
                    <td>{row.title}</td>    
                    <td>{row.status}</td>    
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
                    <button className="btn col m4" type='button' onClick={this.handleAll.bind(this)}>All</button>
                    <button className="btn col m4" type='button' onClick={this.handleCompleted.bind(this)}>Completed</button>
                    <button className="btn col m4" type='button' onClick={this.handleProgress.bind(this)}>In progress</button>
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

export default connect(mapStateToProps)(Todos)