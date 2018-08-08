import React from 'react';
import User from './User'; 
import PropTypes from 'prop-types'; 


const UserList = (props) => {
    return (
        <ul>
            {
                props.users.map(user => {
                    return (
                        <User
                            key={user.id}
                            user={user}
                        />
                    )
                })
            }
        </ul>
    )
}

UserList.propTypes = {
    users: PropTypes.array.isRequired
}

export default UserList; 