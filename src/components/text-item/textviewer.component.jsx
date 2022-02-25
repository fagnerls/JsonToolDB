import React from "react";
import { connect } from "react-redux";
import {setJsonData} from "../../redux/treeViwer/treeview.actions"
//import { TextField } from "@material-ui/core";

//import "./text-item.styles.scss"

const TextViewer = ({setJsonData}) => {
    const jsonData = {firstName: 'John'};
    
return(
    <div > 
        <button onClick={() => setJsonData(jsonData)} > Update View</button>
    </div>
);}


 const mapDispatchToProps = dispatch =>({    
    setJsonData: (jsonData) => 
    dispatch(setJsonData(jsonData)),
  })

export default connect(null,mapDispatchToProps)(TextViewer);