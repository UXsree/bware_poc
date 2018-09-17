import React, { Component } from 'react';
import Login from './Login';
import TodosManager from './TodosManager';
import TodosEmployee from './TodosEmployee';
import Create from './Create';
import {Button, Icon, Card, Row, Col } from 'react-materialize';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

class App extends Component{
    render(){
        return(
            <BrowserRouter>
            <div>
                <Route path="/" exact render={()=>{
                    return(
                        <Row>
                            <Col m={4}></Col>
                            <Col m={4} className="z-depth-3" style={{"marginTop":"40px"}}>
                                <Login />

                            </Col>
                        </Row>
                    );
                    }
                }                
                />

                <Route path="/todos/manager" exact component={TodosManager}/>
                <Route path="/todos/employee" exact component={TodosEmployee}/>
                <Route path="/create" exact component={Create}/>
            </div>
            </BrowserRouter>
        );
    }
}

export default App;