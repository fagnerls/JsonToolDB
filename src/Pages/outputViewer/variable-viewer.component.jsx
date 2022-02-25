import React from "react";

import { TableContainer, TableHead, Table, TableRow, TableCell, TableBody, Paper } from "@mui/material";

import OutputJsonData from "../../jsonData/outputJson"

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
import { setRowOpen } from "../../redux/testCase/testcase.actions";





const variablesViewer = (props) =>{

const [open, setOpen] = React.useState(false);

const handleOpen = () => {
    setOpen(!open)
}



    //const currentDa = selectDA('Total Risk');
    const variables = props.variablesList;


    return (
        <div>
                        <div>
                <TableContainer component={Paper} disableAutoFocus={true} >
                <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                    <TableCell align="left">
                    <Typography variant="h6" gutterBottom component="div">
                            Calculated Variables
                    </Typography>
                    </TableCell>

                    </TableRow>


                </TableHead>
               <TableRow  sx={{ '& > *': { borderBottom: 'unset' } }}>
                    <TableCell>
                        <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={()=> handleOpen()}
                            >
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell>
                    <TableCell component="th" scope="row">

                    </TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>


                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                <TableRow>
                                <TableCell align="left">Id </TableCell>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="left">Type</TableCell>
                                <TableCell align="left">Value</TableCell>
                                <TableCell align="left">Enumeration Name</TableCell>
                                <TableCell align="left">Scope</TableCell>
                            </TableRow>
                                </TableHead>
                                <TableBody>

                                {variables.map(({...variable}) => (
                                    <TableRow >
                                        <TableCell align="left">{variable.variableId}</TableCell>
                                        <TableCell align="left">{variable.variableName}</TableCell>
                                        <TableCell align="left">{variable.dataType}</TableCell>
                                        <TableCell align="left">{variable.variableValue}</TableCell>
                                        <TableCell align="left">{variable.enumName}</TableCell>
                                        <TableCell align="left">{variable.scopeName}</TableCell>
                                    </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
                </Table>
      </TableContainer>
      <br></br>
      <br></br>
                </div>




        </div>
    );
}


export default variablesViewer;
