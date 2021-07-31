import * as React from 'react';
import { Link } from 'react-router-dom';



export const SidePanel= (props)=> {
  return (
    <div class='theside'>
      The header
      {/* <li><Link to={"/login"}>Login</Link></li> */}
      <li><Link to={"/users"}>users</Link></li>
      <li><Link to={"/setting"}>settings</Link></li>
      <li><Link to={"/sessions"}>sessions</Link></li>
    </div>
  );
}
export default SidePanel