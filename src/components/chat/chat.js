import React, { Component } from 'react';
import './chat.css';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';
import { connect } from 'react-redux';
import { updateChat } from '../../actions';
import chat_reducer from "../../reducers/chat_reducer";
import { reduxForm, Field } from 'redux-form';
import Input from '../home/input';

class Chat extends Component{
    dbRef = db.ref('/');

    componentDidMount(){
        this.dbRef.on('value', this.props.updateChat);
    }

    componentWillUnmount(){
        this.dbRef.off();
    }

    noNameGoToHomePage(){
        this.props.history.push('/');
    }

    sendMessage = ({message}) => {
        const newMessage = {
            name: localStorage.name,
            message: message
        }

        this.dbRef.push(newMessage);
        this.props.reset();

    }


    render(){
        const { log, handleSubmit } = this.props;

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
                <div className="row">
                    <form onSubmit={handleSubmit(this.sendMessage)} className="col s8 offset-s2">
                        <Field name="message" label="Message" component={Input} />
                    </form>
                </div>
                <p>Hello, {localStorage.name ? localStorage.name : this.noNameGoToHomePage()}</p>
                <ul className="collection">
                    {chatElements}
                </ul>
            </div>
        );
    }
}

Chat = reduxForm({
    form: 'text-message',
    validate: ({message}) => message ? {} : {message: 'No empty messages!'}
})(Chat);

function mapStateToProps(state){
    return {
        log : state.chat_reducer.log
    }
}

export default connect(mapStateToProps, {updateChat})(Chat);