import React, {useState, useEffect} from 'react'
import {DataGrid} from '@material-ui/data-grid'
import Cookie from './Cookie'
import axios from 'axios';

const tokenStr = Cookie.get("token");


const SessionsDG = () => {

  const [settingkeyval, setsettingkeyval] = useState([])

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = () => {
    axios.get(
        "http://miniver.rahasec.com:8083/api/v2/settings", { headers: {"Authorization" : `${tokenStr}`} }
        )
        .then(response => {
            console.log("responsedata:", response.data);
            let rr= response.data;
            
            setsettingkeyval(rr);
        
        })
        .catch(error => {
        console.log("login error", error);
        return JSON.stringify(error);
    
        });
    }

   function handleSubmit(event) {
      //alert('A name was submitted: ' + this.state.value);
      //event.preventDefault();
    }

    function handleChange(event) {
      this.setState({value: event.target.value});
    }
  return (
    <div style={{height: 700, width: '100%'}}>
      <form onSubmit={handleSubmit}>
      <table>
        {Object.keys(settingkeyval).map((innerAttr, index) => {
          return (
              // <span key={index}> {innerAttr}:  {settingkeyval[innerAttr]}<br/></span>
              
              <tr>
                <td><label class="keyvalLabel">{innerAttr}: </label></td>
                <td><input class="keyvalInput" type="text" value={settingkeyval[innerAttr]} onChange={handleChange} /></td>
              </tr>
              
          )})
        }
        </table>
        <input type="submit" value="Save All" />
      </form>
    </div>
  )
}

export default SessionsDG