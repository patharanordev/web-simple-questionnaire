
import * as React from 'react';
import logo from '../logo.svg';
import Button from '@mui/material/Button';
import LinkTo from '../components/LinkTo';

const Home = () => {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Are you ready ?
      </p>
      
      <Button variant='contained'>
        <LinkTo to='/quiz' buttonName='Start' />
      </Button>
    </div>
  );
}
 
export default Home;

Home.displayName = 'Home'