import React from 'react';
import logo from '../logo.svg';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Are you ready ?
      </p>
      
      <Button variant='contained'>
        <NavLink to='/quiz'>Start</NavLink>
      </Button>
    </div>
  );
}
 
export default Home;