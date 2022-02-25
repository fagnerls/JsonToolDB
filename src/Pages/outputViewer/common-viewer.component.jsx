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

function selectDA (daName) {
    return OutputJsonData[0].row.return.systemOutput.decisionAreaList.filter(
        da => da.decisionAreaName.includes(daName ))
}




const CommonViewer = (props) =>{

  const [daId, setDaId] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const handleOpen = (daID) => {
    if (daID === daId || daId === 0) {
      setOpen(!open);
    }
      setDaId(daID);
  }



    //const currentDa = selectDA('Total Risk');
    const currentDa = props.decisionAreaList.filter(da => da.decisionAreaName.includes( props.decisionAreaName) )

    return (
        <div>

             {

                 currentDa.map(({decisionAreaId , ...otherSectionProps}) =>(

                <div>
                <TableContainer component={Paper} disableAutoFocus={true} >
                <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                    <TableCell align="left">
                    <Typography variant="h6" gutterBottom component="div">
                            {otherSectionProps.decisionAreaName}
                    </Typography>
                    </TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell align="left">Decision Area Id </TableCell>
                        <TableCell align="left">Decision Area Name Name</TableCell>
                        <TableCell align="left">Action Set ID</TableCell>
                        <TableCell align="left">Action Set Name</TableCell>
                        <TableCell align="left">Tree Name</TableCell>
                        <TableCell align="left">Tree Row ID</TableCell>
                        <TableCell align="left">Reason Code</TableCell>
                        <TableCell align="left">Exclusion Indicator</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">{decisionAreaId}</TableCell>
                        <TableCell align="left">{otherSectionProps.decisionAreaName}</TableCell>
                        <TableCell align="left">{otherSectionProps.actionSetId}</TableCell>
                        <TableCell align="left">{otherSectionProps.actionSetName}</TableCell>
                        <TableCell align="left">{otherSectionProps.metaphorName}</TableCell>
                        <TableCell align="left">{otherSectionProps.metaphorRowId}</TableCell>
                        <TableCell align="left">{otherSectionProps.reasonCode}</TableCell>
                        <TableCell align="left">{otherSectionProps.bDaExclusion.toString()}</TableCell>
                    </TableRow>
                </TableHead>
               <TableRow key={decisionAreaId} sx={{ '& > *': { borderBottom: 'unset' } }}>
                    <TableCell>
                        <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={() => handleOpen(decisionAreaId)}
                            >
                            {open && daId === decisionAreaId ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell>
                    <TableCell component="th" scope="row">

                    </TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={open && (daId===decisionAreaId)} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                            Action List
                            </Typography>

                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Action ID</TableCell>
                                        <TableCell align="left">Row Label</TableCell>
                                        <TableCell align="left">Action Name</TableCell>
                                        <TableCell align="left">Action Value</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                {otherSectionProps.actionList?  otherSectionProps.actionList.sort((a,b) => a.rowLabel > b.rowLabel ? 1:-1).map((actionList) => (
                                        <TableRow >
                                            <TableCell component="th" >
                                            {actionList.actionId}
                                            </TableCell>
                                            <TableCell align="left">
                                            {actionList.rowLabel}
                                            </TableCell>
                                            <TableCell align="left"  >

                                            {actionList.actionName}

                                            </TableCell>
                                            <TableCell align="left">
                                            {actionList.actionValue}
                                            </TableCell>


                                        </TableRow>
                                    )):null}
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


                 ))
             }
        </div>
    );
}


export default CommonViewer;
