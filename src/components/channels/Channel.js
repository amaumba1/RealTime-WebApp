import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Channel extends Component {
    onClick = (event) =>  {
        
        const { setChannel, channel } = this.props;
        setChannel(channel);

        event.preventDefault();
    }
    render() {
        const { channel, activeChannel } = this.props;
        const active = channel === activeChannel ? 'active' : '';
        return (
            <li className={active}>
                <a 
                    value={channel}
                    onClick={this.onClick}
                    //onChange={event => this.setState(event.target.value)}
                >
                    {channel.name} 
                </a>
            </li>
        )
    }
}

Channel.propTypes = {
    channel: PropTypes.object.isRequired,
    setChannel: PropTypes.func.isRequired,
    //addChannel: PropTypes.func.isRequired,
    activeChannel: PropTypes.object.isRequired
}

export default Channel