import React from "react"
import { connect } from "react-redux";
import { addNewVariable, setRowOpen, setUpdateVar, setVarValue, setTempVarValue, setTempVarName, removeCase, removeVariable } from "../../redux/testCase/testcase.actions";

import { TableHead, Table, TableRow, TableCell } from "@mui/material";
import TableBody from '@mui/material/TableBody';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';


import { TextField } from "@mui/material";


const TestCaseBody = ({stateCaseData, setRowOpen, addNewVariable, setUpdateVar, setTempVarValue, setTempVarName, setVarValue, removeCase, removeVariable}) => {




  //const [open, setOpen] = React.useState(false);


  //const [update, setUpdate] = React.useState(false);

  //const [tempVarValue, setTempVarValue1] = React.useState();

  const tempVarsValues= {

    varIds: null,
    varNam: null,
    varValue: null

}
  const handleTempVarName = (event) =>{
    tempVarsValues.varIds = (event.target.id);
    tempVarsValues.varNam = (event.target.value);

    //setTempVarValue1(tempVarsValues)
    setTempVarName(tempVarsValues)
  }

  const handleTempVarValue = (event) =>{
    tempVarsValues.varIds = (event.target.id);
    tempVarsValues.varValue = (event.target.value);
    setTempVarValue(tempVarsValues)
  }

  const setOpen = (row) => {
    const newOpenValue = {
        id: row.Key,
        open : !(row.open)
    }
    setRowOpen(newOpenValue)
  }

  const handleEditClick = (row) => {
    //setUpdate(!update);
    setUpdateVar(row);
  }

  const handleSaveClick = (row) => {
    //setUpdate(false);

    setVarValue(row)
    //setUpdateVar(row.varId);
  }

  const handleAddVariable = (key) =>{
    const newCaseVariable = {
        caseId: key,
        varId: Math.floor(Math.random() * 10000),
        variableName: null,
        variableValue: null,
        update: false,
        tempVarName: null,
        tempVarValue: null,
    }

    addNewVariable(newCaseVariable)
  };

  const handleRemoveCase = (key) =>{
        removeCase(key);
  }

  const handleRemoveVariable = (key) =>{
        removeVariable(key);
  }


    return (
         stateCaseData ? stateCaseData.map ((row) => (
            <React.Fragment key={row.key}>
                <TableRow  sx={{ '& > *': { borderBottom: 'unset' } }}>
                    <TableCell>
                        <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={()=>setOpen(row)}
                            >
                            {row.open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.caseName}
                    </TableCell>
                    <TableCell align="center">{row.focusID}</TableCell>
                    <TableCell align="right">{row.callType}</TableCell>
                    <TableCell align="right">{row.open?
                        <Fab color="primary" size="small" variant="extended" onClick={()=>handleAddVariable(row.Key)} > Add Var</Fab>
                        : <Fab color="primary" size="small" variant="extended" onClick={()=>handleRemoveCase(row.Key)} > Remove </Fab> }
                    </TableCell>
                </TableRow>
                <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={row.open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Case Inputs
                            </Typography>

                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Input Field</TableCell>
                                        <TableCell align="center">Value</TableCell>
                                        <TableCell align="right"></TableCell>
                                        <TableCell align="right"> </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {row.variables?  row.variables.map((variableRow) => (
                                        <TableRow key={variableRow.varId}>
                                            <TableCell component="th" >
                                            {variableRow.update ? <TextField
                                                id={variableRow.varId.toString() + "," + row.Key }
                                                onChange={ handleTempVarName} variant="standard" label="Click to edit"
                                                value={variableRow.tempVarName}
                                                selected={true}
                                                />
                                            : variableRow.variableName}
                                            </TableCell>
                                            <TableCell align="center"  >

                                            {variableRow.update ? <TextField
                                                id={variableRow.varId.toString() + "," + row.Key}
                                                onChange={(e)=> handleTempVarValue(e)}
                                                variant="standard" label="Click to edit" />
                                            : variableRow.variableValue
                                            }

                                            </TableCell>
                                            <TableCell align="right">
                                                <Fab onClick={() => handleEditClick(variableRow)}  color="primary" size="small" aria-label="Edit">
                                                {variableRow.update ? <CancelIcon fontSize="small"/> : <EditIcon fontSize="small"/>}

                                                </Fab>
                                            </TableCell>

                                            <TableCell align="right">
                                                {variableRow.update ?
                                                <Fab onClick={()=> handleSaveClick(variableRow)} color="primary" size="small" aria-label="Remove">
                                                    <CheckIcon fontSize="small" />
                                                </Fab>
                                                :
                                                <Fab onClick={()=> handleRemoveVariable(variableRow)} color="primary" size="small" aria-label="Remove">
                                                   <RemoveCircleOutlineIcon fontSize="small" />
                                                </Fab>
                                                }
                                            </TableCell>
                                        </TableRow>
                                    )):null}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
            </React.Fragment>
        )):null


    );
}

const mapDispatchToProps = dispatch =>({
    addNewVariable : newCaseVariable => dispatch(addNewVariable(newCaseVariable)) ,
    setRowOpen : newOpenvalue => dispatch(setRowOpen(newOpenvalue)) ,
    setUpdateVar : newUpdateValue => dispatch(setUpdateVar(newUpdateValue)),
    setTempVarName: newTempVarValues => dispatch(setTempVarName(newTempVarValues)),
    setTempVarValue: newTempVarValues => dispatch(setTempVarValue(newTempVarValues)),
    setVarValue: variableid => dispatch (setVarValue(variableid)),
    removeCase: caseId => dispatch (removeCase(caseId)),
    removeVariable: varInfo => dispatch(removeVariable(varInfo))
})

const mapStateToProps= state => ({
    stateCaseData : state.testCaseData.testCaseList
  });

export default connect(mapStateToProps, mapDispatchToProps) (TestCaseBody);
