import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import uniqid from 'uniqid';

import URL from '../../shared/constants/url';

import Input from './Input';
import Message from './Message';

import Messages from './Messages';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 70vh;
`;

const Chat = () => {
  const [name, setName] = useState('');
  const [messages, setMessages] = useState([
    { name: 'Baby', message: "Welcome to Baby's First Chat!" },
  ]);

  const ws = new WebSocket(URL);

  const addMessage = message => setMessages([message, ...messages]);

  const submitMessage = (string) => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const message = { name, message: string };
    ws.send(JSON.stringify(message));
    addMessage(message);
  };

  useEffect(() => {
    ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected');
    };

    ws.onmessage = (event) => {
      // on receiving a message, add it to the list of messages
      const message = JSON.parse(event.data);
      addMessage(message);
    };

    ws.onclose = () => {
      console.log('disconnected');
    };
  }, [messages]);

  return (
    <Layout>
      <div>
        <input
          placeholder="Username"
          value={name}
          onChange={event => setName(event.target.value)}
          style={{ width: '80%', marginLeft: '5%' }}
        />
        <Input ws={ws} onMessageSubmit={string => submitMessage(string)} />
      </div>
      <div style={{ overflowY: 'scroll' }}>
        <Messages>
          {messages.map(message => (
            <Message key={uniqid()} message={message.message} name={message.name} />
          ))}
        </Messages>
      </div>
    </Layout>
  );
};

export default Chat;
