import * as React from 'react';
import axios from "axios";
//import { Switch, Route } from 'react-router-dom';
import Cookie from "./sub/Cookie";
import { Link } from 'react-router-dom';
import SettingsDG from './sub/SettingsDG';

function getSessions (){
  const tokenStr = Cookie.get("token");
axios
      .get(
        "http://miniver.rahasec.com:8083/api/v2/settings", { headers: {"Authorization" : `${tokenStr}`} }
      )
      .then(response => {
        console.log("responsedata:", response.data);
        return response.data;
        
      })
      .catch(error => {
        console.log("login error", error);
        return JSON.stringify(error);

      });
    }
export default function Setting({authorized}) {
  if(!authorized){
  return (
    <div style={{ height: 400, width: '100%' }}>
      <div class="sectionTop" >Section setting...........Authorized :)..................</div>
     
      <SettingsDG />
    </div>
  );
  }else{
    return (
      <div>Section setting Not Authorized
      <p><Link to={"/login"}>pls login</Link></p>
      </div>
    );
  }
}