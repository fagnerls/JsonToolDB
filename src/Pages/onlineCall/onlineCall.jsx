import React from 'react';
import axios from 'axios';
import  Button  from '@mui/material/Button';

import OnlineSample from "../../jsonData/onlineSample"

const headers =  { 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }

const CallSD = () => {
  const handleSubmit = () => {


    //axios.post('http://localhost:8080/CarbonRuleServiceServer/rest/service/mainForCarbon'  , OnlineSample, {
      axios.get('http://localhost:9001/users' , {
      headers: headers })
      .then(res => {
        console.log(res);
      })
  }

  return (
    <div>
      <label>
       Online Call
      </label>
      <Button variant="contained" onClick={handleSubmit}>Load Output</Button>
  </div>
  )
}

export default CallSD;
