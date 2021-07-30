import React, { Component } from "react";
import axios from "axios";
import { Switch, Route } from 'react-router-dom';
import Cookie from "./sub/Cookie";
import { Redirect } from "react-router";

import { useHistory } from 'react-router-dom'
//export default class Login extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       user: "admin",
//       password: "adminadminadmin",
//       loginErrors: "",
//       token : ""
//     };
    

//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   }

 function handleSubmit(event) {
    const  user = "admin" ;
    const password =  "adminadminadmin";

    axios
      .post(
        "http://miniver.rahasec.com:8083/api/v2/auth/login",
        {
            username: user,
            password: password
        }
      )
      .then(response => {

        console.log("responsedata:", response.data);
        console.log("responsedata suc:", response.data.success);

        if (response.data.success.toString() === "true") {
          console.log("responsedata token:", response.data.token);
          //this.setState({token:response.data.token })
        //   this.props.handleSuccessfulAuth(response.data);

        Cookie.set('token', `Bearer ${response.data.token}`, {
            path: '/',
            maxAge: 60 * 60 * 24
        });
        alert("Success");
        
        //todo: redirect to another page (router)
        <Redirect to='/sessions' />
        }else{
            console.log("OOOOOOOOOO responsedata suc:", response.data.success);

        }
      })
      .catch(error => {
        console.log("login error", error);
        alert("bad");

      });
    event.preventDefault();
  }

  export const Login2 =(props)=> {
    const history = useHistory()
    return (
      <div>
        <form onSubmit={handleSubmit} afterSubmit={() => history.push('/settings')}>
          <input
            type="user"
            name="user"
            placeholder="user"
            value="admin"
            //onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value="adminadminadmin"
            //onChange={this.handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
