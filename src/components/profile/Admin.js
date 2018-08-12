import React from 'react';

import AuthUserContext from '../auth/AuthUserContext';
import withAuthorization from '../auth/withAuthorization';
import { db } from '../../firebase'; 
//import UserList from './users/UserList';

const AdminPage = () => (Component) => 
    class AdminPage extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                users: null,
            }
        }

        componentDidMount() {
            db.onceGetUsers().then(snapshot => {
                return this.setState(() => ({ users: snapshot.val() }))
            });
        }
        

        render() {
        

            const { users } = this.state; 

            return (
                
                <AuthUserContext.Consumer>
                    {authUser => authUser ? <Component /> :
                        <div>
                            <h1>Admin</h1>
                            <p>Restricted area! Only users with the admin rule are authorized.</p>

                            {!users && <UserListData users={users} />}
                        </div>
                    }
                </AuthUserContext.Consumer>
                      
            )
        }
    }

const UserListData = ({ users }) => 
    <div>
        <h2>List of Usernames of Users</h2>
        <p>(Saved on Sign Up in Firebase Database)</p>
        {
            Object.keys(users).map(key => {
                return <div key={key}>{users[key].username}</div>
            })
        }
    </div>

const authCondition = (authUser) => authUser.role === 'ADMIN' && (!!authUser)  

//const authCondition = (authUser) => (!!authUser)

export default withAuthorization(authCondition)(AdminPage); 


