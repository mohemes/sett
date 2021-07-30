import * as React from 'react';
import axios from "axios";
//import { Switch, Route } from 'react-router-dom';
import Cookie from "./sub/Cookie";

axios
      .post(
        "http://miniver.rahasec.com:8083/api/v2/auth/login",
        {
            username: 'admin',
            password: 'adminadminadmin'
        }
      )
      .then(response => {
        console.log("responsedata:", response.data);
        console.log("responsedata suc:", response.data.success);
        if (response.data.success.toString() === "true") {
          console.log("responsedata token:", response.data.token);
          this.setState({token:response.data.token })
        //   this.props.handleSuccessfulAuth(response.data);
        Cookie.set('token', `Bearer ${response.data.token}`, {
            path: '/',
            maxAge: 60 * 60 * 24
        });

        
        }else{
            console.log("OOOOOOOOOO responsedata suc:", response.data.success);

        }
      })
      .catch(error => {
        console.log("login error", error);
      });

export default function Sessions() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      Sections.............................
    </div>
  );
}