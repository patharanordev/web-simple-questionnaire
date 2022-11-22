import * as React from 'react'
import { NavLink } from 'react-router-dom';

type Props = {
  to:string
  buttonName:string
}

const LinkTo = ({ to, buttonName }:Props) => (
  <NavLink 
    to={to}
    style={{
      textDecoration: 'none',
      color:'white'
    }}
  >
    {buttonName}
  </NavLink>
)

export default LinkTo

LinkTo.displayName = 'LinkTo'