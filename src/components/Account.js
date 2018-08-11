import React from 'react';
import AuthUserContext from './AuthUserContext';
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
const AccountPage = () =>
    <AuthUserContext.Consumer>
        {authUser => authUser ?
            <div>
                <h1>Account:</h1>
                <PasswordForgetForm />
                <PasswordChangeForm />
            </div> : null
        }
    </AuthUserContext.Consumer>
export default AccountPage;