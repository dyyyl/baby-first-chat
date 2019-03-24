import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Input = ({ onMessageSubmit }) => {
  const [message, setMessage] = useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onMessageSubmit(message);
        setMessage('');
      }}
    >
      <input
        type="text"
        placeholder="Enter message..."
        value={message}
        onChange={event => setMessage(event.target.value)}
        style={{
          height: '35vh',
          width: '80%',
          resize: 'none',
          marginLeft: '5%',
        }}
      />
      <br />
      <button type="submit" style={{ width: '80%', height: '5vh', marginLeft: '5%' }}>
        SUBMIT
      </button>
    </form>
  );
};

Input.propTypes = {
  onMessageSubmit: PropTypes.func.isRequired,
};

export default Input;
