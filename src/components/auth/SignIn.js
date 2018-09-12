import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';

import { SignUpLink } from './SignUp'; 
import {PasswordForgetLink } from './PasswordForget'; 
import { auth } from '../../firebase';

import * as routes from '../../constants/routes'; 

const SignInPage = ({ history}) =>
       <div>
            <div>
                <div>Real Time Chat for All </div>
                <SignInForm history={history} /> 
                <PasswordForgetLink /> 
                <SignUpLink />
            </div>
        </div>


const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
})

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null
}

class SignInForm extends Component {
    constructor(props) {
        super(props)

        this.state = { ...INITIAL_STATE }
    }

    onSubmit = (event) => {
        const { email, password, } = this.state; 
        const { history } = this.props; 

        auth.doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE })
                history.push(routes.HOME)
            })
            .catch(error => {
                this.setState(byPropKey('error', error))
            })

        event.preventDefault(); 
    }
    render() {
        const { email, password, error } = this.state; 
        const isInvalid = password === '' || email === '';
        return (
        
            <form onSubmit={this.onSubmit}>
                <div>
                    <div>
                        Email
                    </div>
                    <div>
                        <input 
                            value={email}
                            onChange={(event) => this.setState(byPropKey('email', event.target.value))}
                            type='text'
                            placeholder='Email Address' 
                        />
                    </div>    
                </div>
                
                 <div>
                    <div>
                        Password
                    </div>
                    <div>
                        <input 
                            value={password}
                            onChange={(event) => this.setState(byPropKey('password', event.target.value))}   
                            type="password" placeholder="Password" 
                            />
                    </div>
                </div>
                
                <div>
                    <checkbox>Remember me</checkbox>
                </div>

                <div>
                    <button  disabled={isInvalid} type="submit">Sign in</button>
                    {error && <p>{error.message}</p>}
                </div>   
            </form>
        )
    }
}

export default withRouter(SignInPage)

export { 
    SignInForm,
}

