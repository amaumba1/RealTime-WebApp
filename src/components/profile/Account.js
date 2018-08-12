import React from 'react';
import AuthUserContext from '../auth/AuthUserContext';
import { PasswordForgetForm } from '../auth/PasswordForget';
import PasswordChangeForm from '../auth/PasswordChange';
import withAuthorization from '../auth/withAuthorization'; 

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