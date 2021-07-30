import * as React from 'react';
import axios from "axios";
//import { Switch, Route } from 'react-router-dom';
import Cookie from "./sub/Cookie";
import { Link } from 'react-router-dom';
import DataTable from './sub/DataTable';

function getSessions (){
  const tokenStr = Cookie.get("token");
axios
      .get(
        "http://miniver.rahasec.com:8083/api/v2/settings/session", { headers: {"Authorization" : `${tokenStr}`} }
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
export default function Sessions({authorized}) {
  if(!authorized){
  return (
    <div style={{ height: 400, width: '100%' }}>
      Sections...........Authorized :)..................
      {/* <p>{getSessions()}</p> */}
      <DataTable />
    </div>
  );
  }else{
    return (
      <div>Sections Not Authorized
      <p><Link to={"/login"}>pls login</Link></p>
      </div>
    );
  }
}