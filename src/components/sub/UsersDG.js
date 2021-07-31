import React, {useState, useEffect} from 'react'
import {DataGrid} from '@material-ui/data-grid'
import Cookie from './Cookie'
import axios from 'axios';
import { Button } from '@material-ui/core';
import { GridApi } from '@material-ui/data-grid';

const columns = [
 {field: 'id', headerName: 'IDdfg' },
  {field: 'createTime', headerName: 'CreateTime', width: 300},
  {field: 'lastRequestTime', headerName: 'LastRequestTime', width: 600},
  {field: 'username', headerName: 'user', width: 600},
  {
    field: "",
    headerName: "Action",
    disableClickEventBubbling: true,
    renderCell: (params) => {
      const onClick = () => {
        const api: GridApi = params.api;
        const fields = api
          .getAllColumns()
          .map((c) => c.field)
          .filter((c) => c !== "__check__" && !!c);
        const thisRow = {};

        fields.forEach((f) => {
          thisRow[f] = params.getValue(params.id,f);
        });

        return alert(JSON.stringify(thisRow, null, 4));
      };

      return <Button onClick={onClick}>Click</Button>;
    }
    }
]
const tokenStr = Cookie.get("token");


const SessionsDG = () => {

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = () => {
    axios.get(
        "http://miniver.rahasec.com:8083/api/v2/settings/session", { headers: {"Authorization" : `${tokenStr}`} }
        )
        .then(response => {
            console.log("responsedata:", response.data);
            let rr= response.data;
            rr.map((rr) => {
                rr['id'] = rr._id
                rr['username'] = rr.loginID.username
            })
            setTableData(rr);
        
        })
        .catch(error => {
        console.log("login error", error);
        return JSON.stringify(error);
    
        });
    }
  return (
    <div style={{height: 700, width: '100%'}}>
      <DataGrid 
        rows={tableData}
        columns={columns}
        pageSize={12}
        
      />
    </div>
  )
}

export default SessionsDG