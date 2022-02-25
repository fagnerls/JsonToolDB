import React from "react";
import { useState } from "react";
import  Button  from '@mui/material/Button';
import   TextField from '@mui/material/TextField';
import { connect } from "react-redux";
import { setTestCase } from "../../redux/testCase/testcase.actions";
import {generateJsonSD} from "../../jsonData/generateJsonSD"


import TestCaseDirectory from "../../components/directory/testcase.directory.component"


const TestCase = ({setTestCase, testCaseState}) => {

    const [caseName, setCaseName] = useState();
    const [customerAccid, setCustomerAccid] = useState();
    const [callType, setCallType] = useState();
    const [key, setKey] = useState(0);
    const [downloadFlag, setDownloadFlag] = useState(false);
    const [downloadlink, setDownloadlink] = useState();


    const handleClick = (e) => {
        e.preventDefault();
        
        setKey(key + 1);
        const caseData = {
            Key: key,
            caseName: caseName,
            focusID: customerAccid,
            callType: callType,
            open: true,
            variables: [
              
              
            ],
            
          }
        
          if(!(caseName === undefined || customerAccid === undefined || callType === undefined ) ){
            setTestCase(caseData)
          }
        

    };

    
    const generateJson = () =>{
       var jsonToDownload =  [];
       
       jsonToDownload = generateJsonSD (testCaseState);

       console.log(jsonToDownload);

       const datatoDownload = new Blob([JSON.stringify(jsonToDownload)],{type: 'application/json'});
       setDownloadlink(window.URL.createObjectURL(datatoDownload));
      
       setDownloadFlag(!downloadFlag);
       
    }

    return(
    <div className="test-case">
        <div className="search-bar">
           <div  className="actionbuttons">
                <div className="actionbuttons">
                    <TextField  label="Case Name"  onChange={(e) =>setCaseName(e.target.value)} />
                </div>
                <div className="actionbuttons">
                    <TextField  label="Customer + AccountID " onChange={(e) => setCustomerAccid(e.target.value)} />
                </div>
                <div className="actionbuttons">
                    <TextField label="Call Type" onChange={(e) => setCallType(e.target.value) } />
                </div>
            </div>
            <div className="actionbuttons">
            <div className="actionbuttons">
                <Button variant="contained" onClick={(e)=>handleClick(e)}>Add Case</Button>
            </div>
            <div className="actionbuttons">
                <Button variant="contained" onClick={generateJson}>Generate Json</Button>
            </div>
            <div className="actionbuttons">
             <Button variant="contained"   download='list.txt' href={downloadlink}>Download</Button>
            
            </div>
            </div>

            <TestCaseDirectory />
        </div>

    </div>
);}




const mapDispatchToProps = dispatch =>({
    setTestCase: (testCaseData) => dispatch(setTestCase(testCaseData))
})

const mapStateToProps = state => ({
    testCaseState: state
});

export default connect(mapStateToProps, mapDispatchToProps) (TestCase);