import React, { Component } from 'react';
import './chat.css';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';
import { connect } from 'react-redux';
import { updateChat } from '../../actions';
import chat_reducer from "../../reducers/chat_reducer";

class Chat extends Component{
    dbRef = db.ref('/');

    componentDidMount(){
        this.dbRef.on('value', this.props.updateChat);
    }

    componentWillUnmount(){
        this.dbRef.off();
    }

    render(){
        const { log } = this.props;

        const chatElements = Object.keys(log).map(k=>{
            const { name, message } = log[k];
            return <li key={k} className="collection-item"><b>{name} : </b>{message}</li>
        });

        return (
            <div>
                <h1 className="center">Chat Room</h1>
                <div className="row right-align">
                    <Link to="/" className="btn btn-large red"><i className="material-icons prefix homeIcon green-text">home</i>&nbsp;Home</Link>
                </div>
                <ul className="collection">
                    {chatElements}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        log : state.chat_reducer.log
    }
}

export default connect(mapStateToProps, {updateChat})(Chat);