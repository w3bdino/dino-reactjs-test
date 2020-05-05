import React from 'react';
import Container from '@material-ui/core/Container';
import PriceEditionForm from './components/price.component/price.edition.form';
import './App.css';

const App = () => (
  <Container className="main" maxWidth="xs">
    <PriceEditionForm />
  </Container>      
);

export default App;
