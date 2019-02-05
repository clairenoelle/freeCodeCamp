import React, { Fragment } from 'react';
import { Container } from 'reactstrap';
import './App.css';

import MainCard from './components/MainCard';

const App = () => (
  <Fragment>
    
    <main className="my-5 py-5 h-50">
      <Container className="w-75 px-0">
            <MainCard className="d-flex align-self-center"/>

      </Container>
    </main>
    
  </Fragment>
);

export default App;
