import React, { Component } from 'react';
import {Button, Icon, Card, Row, Col, Input } from 'react-materialize';
import { connect } from 'react-redux';

class Create extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    onChangeHandler(event){
        this.setState({ [event.target.name]: event.target.value })
    }
    render(){
        console.log("state from create.js", this.props.todos);
        return(
            <div className="container">
                  <div className="row">
                    <form className="col m12">
                    <div className="row">
                        <div className="input-field col m6">
                        <i className="material-icons prefix">mode_edit</i>
                        <input type="text" id="icon_prefix2" className="materialize-textarea" name="todoinput" onChange={this.onChangeHandler.bind(this)}></input>
                        <label htmlFor="icon_prefix2">To Do</label>
                        </div>
                    </div>
                    </form>
                </div>
                <Row>
                    <Button className="btn" onClick={()=>{

                        }}>save</Button>
                    <Button className="btn red">cancel</Button>
                </Row>    
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    return{
        todos: state.login
    }
}

// funtion mapDispatchToProps(dispatch){
//     return{
//         add: (value) => {
//             dispatch({type:'ADD', payload: value})
//         }
//     }

// }

export default connect(mapStateToProps)(Create)
