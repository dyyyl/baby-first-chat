import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  max-width: 90%;
  justify-self: left;
  width: auto;

  background: rgba(60, 200, 120, 0.1);
`;

const Message = ({ message, name }) => (
  <Box>
    <strong>{name}</strong>: {message}
  </Box>
);

Message.propTypes = {
  message: PropTypes.string,
  name: PropTypes.string,
};

Message.defaultProps = {
  message: '',
  name: '',
};

export default Message;
