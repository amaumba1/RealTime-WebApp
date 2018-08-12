import React from 'react';
import AuthUserContext from './AuthUserContext';
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization'; 

const AccountPage = () =>
    <AuthUserContext.Consumer>
        {authUser => authUser &&
            <div>
                <h1>Account:</h1>
                <PasswordForgetForm />
                <PasswordChangeForm />
            </div> 
        }
    </AuthUserContext.Consumer>

const authCondition = (authUser) => !authUser; 


export default withAuthorization(authCondition)(AccountPage);