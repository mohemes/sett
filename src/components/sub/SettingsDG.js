import React, {useState, useEffect} from 'react'
import {DataGrid} from '@material-ui/data-grid'
import Cookie from './Cookie'
import axios from 'axios';

const tokenStr = Cookie.get("token");
let formRef = null;

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


      console.log(event);
      //alert('A name was submitted: ' + this.state.value);
      let rr=event.target;
      var rr2={};
      for (let index = 0; index < rr.length; index++) {
        const element = rr[index];
        if(element.name.length > 0 && !element.name.startsWith('[')){
          rr2[element.name] = element.value;
        }
      }
      console.log("mod: " , rr2);
      event.preventDefault();
    }

    function handleChange(event) {
      this.setState({value: event.target.value});
    }
  return (
    <div style={{height: 700, width: '100%'}}>
      <form ref={ref => formRef = ref} onSubmit={handleSubmit}>
      <table>
        {Object.keys(settingkeyval).map((innerAttr, index) => {
          return (
              // <span key={index}> {innerAttr}:  {settingkeyval[innerAttr]}<br/></span>
              
              <tr>
                <td class="keyvaltd"><label class="keyvalLabel">{innerAttr}: </label></td>
                <td><input class="keyvalInput" name={innerAttr} type="text" value={settingkeyval[innerAttr]} onChange={handleChange} /></td>
              </tr>
              
          )})
        }
        <tr><td></td> <td><input type="submit" value="Save All" /></td></tr>
        </table>
      </form>
    </div>
  )
}

export default SessionsDG