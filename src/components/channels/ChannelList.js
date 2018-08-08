import React from 'react'
import {PropTypes} from 'prop-types';
import Channel from './Channel'; 


const ChannelList = (props) => {
    return (
        <ul>
                {
                    props.channels.map( chan => {
                        return(
                            <Channel 
                                channel={chan}
                                key={chan.id}
                                {...props}
                            /> 
                        )
                    })
                }
        </ul>
    )
}

ChannelList.propTypes = {
    channels: PropTypes.array.isRequired,
    setChannel: PropTypes.func.isRequired,
    activeChannel: PropTypes.object.isRequired
}
export default ChannelList; 