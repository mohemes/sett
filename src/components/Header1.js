import * as React from 'react';
import { Link } from 'react-router-dom';



export const Header1= (props)=> {
  return (
    <div class='theheader'>
      The header
      <li><Link to={"/login"}>Login</Link></li>
      <li><Link to={"/sessions"}>settings</Link></li>
    </div>
  );
}
export default Header1