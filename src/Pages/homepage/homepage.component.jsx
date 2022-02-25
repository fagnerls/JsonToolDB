import React, {useState} from "react";

import { connect } from "react-redux";
import { setJsonData } from "../../redux/treeViwer/treeview.actions";
import {setJsonDataKV} from "../../redux/testCase/testcase.actions"
import {setOutputViewer} from "../../redux/output/outputviewer.actions";


import './homepage.styles.scss'
import  Button  from '@mui/material/Button';
import TextField  from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar'
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
//import Popup from 'react-popup';

const HomePage = ({setJsonData, setJsonDataKV, setOutputViewer}) => {

    const [rawJson, setRawJson] = useState("");

    const [outputJson, setOutputJson] = useState("");

    const [open, setOpen] = React.useState(false);

    const [loaded, setLoaded] = useState("none")

    const [message, setMessage] = useState();

    const handleChangeInput = (event) =>{

        setRawJson(event.target.value);
    }

    const handleChangeOutput = (event) =>{

      setOutputJson(event.target.value);
  }

    const loadInput = (event) =>{

        if (rawJson === '') {
          setLoaded("yes")
          setOpen(true);
          setMessage("Paste an Input json register in the Textbox!")
        } else{
            setJsonData(rawJson)
            setJsonDataKV(rawJson)
            setMessage("Data Loaded!")
        }

    }


    const loadOutput = (event) =>{

      if (outputJson === '') {
        setLoaded("yes")
        setOpen(true);
        setMessage("Paste an Output json register in the Textbox!")
      } else{
          setOutputViewer(outputJson)
          setMessage("Data Loaded!")
      }

  }

    const handleClickClear = () =>{
        setJsonData("")
        setJsonDataKV("")
    }


    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }

      setOpen(false);
    };


    const action = (
      <React.Fragment>
        <IconButton
          size="large"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="large" />
        </IconButton>
      </React.Fragment>
    );

    return(
        <div>
            <div className="textfield">
                 <TextField
                    label="Paste an Input Json"
                    multiline
                    rows={14}
                    style={{ width: 1200 }}
                    onChange={handleChangeInput}
                 />
            </div >

            <div className="actionbuttons">
                <div className="actionbuttons">
                    <Button variant="contained" onClick={loadInput}>Load Input</Button>

                   <Snackbar
                   open={open}
                   autoHideDuration={4000}
                   onClose={handleClose}
                   message={message}
                   action={action}
                 />
                </div>
               {/* <div className="actionbuttons">
                    <Button variant="contained" onClick={handleClickClear} >Clear</Button>
                </div>*/}
            </div>
            <div className="textfield">
                 <TextField
                    label="Paste an Output Json"
                    multiline
                    rows={14}
                    style={{ width: 1200 }}
                    onChange={handleChangeOutput}
                 />
            </div >

            <div className="actionbuttons">
                <div className="actionbuttons">
                    <Button variant="contained" onClick={loadOutput}>Load Output</Button>

                   <Snackbar
                   open={open}
                   autoHideDuration={4000}
                   onClose={handleClose}
                   message={message}
                   action={action}
                 />
                </div>
               {/* <div className="actionbuttons">
                    <Button variant="contained" onClick={handleClickClear} >Clear</Button>
                </div>*/}
            </div>

        </div>
    );}

const mapDispatchToProps = dispatch =>({
    setJsonData: (jsonData) => dispatch (setJsonData(jsonData)),
    setJsonDataKV: (jsonDataKV) => dispatch (setJsonDataKV(jsonDataKV)),
    setOutputViewer: (outputData) => dispatch(setOutputViewer(outputData))
})

export default connect(null, mapDispatchToProps)(HomePage);
