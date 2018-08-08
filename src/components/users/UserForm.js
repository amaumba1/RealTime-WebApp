import { PropTypes } from 'prop-types';
import React, {Component } from 'react';

class UserForm extends Component {

    onSubmit(e) {
        e.preventDefault();
        const node = this.refs.username;
        const userName = node.value;
        this.props.setUserName(userName);
        node.value = ''
    }
    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <div className='form-group'>
                    <input 
                        ref='username'
                        type='text'
                        className='form-control'
                        placeholder='Set Your Name....'
                    /> 
                </div>
            </form>
        )
    }
}

UserForm.propTypes = {
    setUserName: PropTypes.func.isRequired
}

export default UserForm; 