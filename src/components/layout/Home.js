import React, { Component } from 'react';
import ChannelSection from '../channels/ChannelSection';
import UserSection from '../users/UserSection';
import MessageSection from '../messages/MessageSection';



import withAuthorization from '../auth/withAuthorization'; 
//import { db } from '../firebase'; 

import '../App.css';

const authCondition = (authUser) => !authUser; 

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            channels: [],
            users: [],
            messages: [],
            activeChannel: {},
            connected: false
        }
        this.addChannel = this.addChannel.bind(this);
        this.setChannel = this.setChannel.bind(this);
    }

    componentDidMount() {
        let ws = this.ws = new WebSocket('ws://echo.websocket.org');
        ws.onmessage = this.message.bind(this);
        ws.onopen = this.open.bind(this);
        ws.onclose = this.close.bind(this);
    }

    message(e) {
        const event = JSON.parse(e.data);
        if (event.name === 'channel add') {
            this.newChannel(event.data)
        }
    }

    open() {
        this.setState({ connected: true })
    }

    close() {
        this.setState({ connected: false })
    }

    newChannel(channel) {
        let { channels } = this.state;
        channels.push(channel);
        this.setState({ channels })
    }

    addChannel(name) {
        const { channels } = this.state;
        // TODO: Send to server
        let msg = {
            name: 'channel add',
            data: {
                id: channels.length,
                name
            }

        }
        this.ws.send(JSON.stringify(msg))
    }

    setChannel(activeChannel) {
        this.setState({ activeChannel })
        //TODO: Get Channels Messages
    }

    setUserName(name) {
        let { users } = this.state;
        users.push({ id: users.length, name });
        this.setState({ users });
        //TODO: Send to server
    }

    addMessage(body) {
        let { messages, users } = this.state;
        let createdAt = new Date();
        let author = users.length > 0 ? users[0].name : 'anonymous';
        messages.push({ id: messages.length, body, createdAt, author });
        this.setState({ messages });
        //TODO: Send to server
    }

    render() {
        return (
            <div>
                <div>
                    <ChannelSection
                        {...this.state}
                        addChannel={this.addChannel}
                        setChannel={this.setChannel}
                    />
                    <UserSection
                        {...this.state}
                        setUserName={this.setUserName.bind(this)}
                    />
                </div>
                <MessageSection
                    {...this.state}
                    addMessage={this.addMessage.bind(this)}
                />
            </div>

        )
    }
}

//const authCondition = (authUser) => !!authUser; 

export default withAuthorization(authCondition)(HomePage); 