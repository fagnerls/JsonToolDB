import React from "react";

import ReactJson from "react-json-view";
import { connect } from "react-redux";

//import JsonData from "../../jsonData/sample.data";

const JsonViewer = ({currentJson}) =>{
const currentJsonObj = JSON.parse (currentJson)
    return (
    <div>
        <ReactJson src={currentJsonObj} theme="rjv-default" collapsed = {false}  />
    </div>
) };

const mapStateToProps = state => ({
    
    currentJson:  state.jsonData.currentJson
  

}

);

export default connect(mapStateToProps)(JsonViewer);