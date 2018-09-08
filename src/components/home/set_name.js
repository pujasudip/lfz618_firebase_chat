import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from './input';

const SetName = props => {
    function handleSubmit(values){
        localStorage.setItem('name', values.name);
        props.history.push('/chat');
    }

    return (
        <div>
            <h1 className="center">
                <form onSubmit={props.handleSubmit(handleSubmit)}>
                    <Field name="name" label="Name" component={Input}/>
                    <div className="row right-align">
                        <button className="btn orange darken-2">Set Name</button>
                    </div>
                </form>
            </h1>
        </div>
    )
};

function validate({name}){
    return name ? {} : { name: 'Please enter your name'};
}

export default reduxForm({
    form: 'set-name',
    validate: validate
})(SetName);