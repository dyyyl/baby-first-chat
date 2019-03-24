import React, { Fragment, useEffect } from 'react';

import babyLoop from '../shared/helpers/babyLoop';
import dancingBaby from '../shared/images/dancing_baby.gif';
import GlobalStyle from '../shared/styles/GlobalStyle';

import Chat from './Chat';

import Baby from './Baby';
import Container from './Container';
import Logo from './Logo';
import Title from './Title';

const App = () => {
  useEffect(() => {
    babyLoop();
  }, []);

  return (
    <Fragment>
      <Container>
        <Title>
          <Logo>Baby&apos;s First Chat</Logo>
          <Baby src={dancingBaby} alt="dance baby dance" />
        </Title>
        <Chat />
      </Container>
      <GlobalStyle />
    </Fragment>
  );
};

export default App;
