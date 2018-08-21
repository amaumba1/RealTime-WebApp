import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { Form, FormGroup, Col, Modal, 
    ControlLabel, FormControl, 
    Checkbox, Button } from 'react-bootstrap';

import { SignUpLink } from './SignUp'; 
import {PasswordForgetLink } from './PasswordForget'; 
import { auth } from '../../firebase';

import * as routes from '../../constants/routes'; 

const SignInPage = ({ history}) =>
       <div>
        <div className="static-modal">
            <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>Real Time Chat for All </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <SignInForm history={history} /> 
                <PasswordForgetLink /> 
                <SignUpLink />
            </Modal.Body>
            </Modal.Dialog>
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
        
            <Form horizontal onSubmit={this.onSubmit}>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                        Email
                    </Col>
                    <Col sm={3}>
                        <FormControl 
                            value={email}
                            onChange={(event) => this.setState(byPropKey('email', event.target.value))}
                            type='text'
                            placeholder='Email Address' 
                        />
                    </Col>    
                </FormGroup>
                
                 <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                        Password
                    </Col>
                    <Col sm={3}>
                        <FormControl 
                            value={password}
                            onChange={(event) => this.setState(byPropKey('password', event.target.value))}   
                            type="password" placeholder="Password" 
                            />
                    </Col>
                </FormGroup>
                
                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Checkbox>Remember me</Checkbox>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button  disabled={isInvalid} type="submit">Sign in</Button>
                        {error && <p>{error.message}</p>}
                    </Col>
                </FormGroup>   
            </Form>
        )
    }
}

export default withRouter(SignInPage)

export { 
    SignInForm,
}

