import React, { Component } from 'react';

class Input extends Component{

    state = {
        activeClass: ''
    }

    onFocus(){
        const { onFocus } = this.props.input;
        // document.getElementsByTagName('label')
        this.setState({
            activeClass: 'active'
        });

        onFocus.apply(arguments);
    }
    onBlur(event){
        const { onBlur } = this.props.input;
        if(!event.target.value){
            this.setState({
                activeClass: ''
            });
        }
        onBlur.apply(arguments);
    }
    render(){

        const { input, label, type, meta: {touched, error}} = this.props;

        console.log();

        return (
            <div className="row">
                <div className="input-field col s12">
                    <input
                        {...input}
                        type={ type ? type : 'text'}
                        onFocus={this.onFocus.bind(this)}
                        onBlur={this.onBlur.bind(this)}
                    />
                    <label className={this.state.activeClass}>{label}</label>
                </div>
                <p className="red-text text-darken-2">{touched && error}</p>
            </div>
        )
    }
}
export default Input;