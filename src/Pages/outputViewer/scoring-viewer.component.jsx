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
    return OutputJsonData[0].row.return.systemOutput.decisionAreaList.filter(da => da.decisionAreaName === daName )
}




const ScoringViewer = (props) =>{


  const [daId, setDaId] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const handleOpen = (daID) => {
    if (daID === daId || daId === 0) {
      setOpen(!open);
    }

      setDaId(daID);
  }

    //const currentDa = selectDA("Scoring")
    const currentDa = props.decisionAreaList.filter(da => da.decisionAreaName === props.decisionAreaName )
    return (
        <div>
             {
                 currentDa[0].scoringModelList.map(({modelId , ...otherSectionProps}) =>(

                <div>
                <TableContainer component={Paper} disableAutoFocus={true} >
                <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography variant="h6" >
                                {otherSectionProps.modelName}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Model ID </TableCell>
                        <TableCell align="left">Model Name</TableCell>
                        <TableCell align="left">Raw Score</TableCell>
                        <TableCell align="left">Aligned Score</TableCell>
                        <TableCell align="left">Exclusion Indicator</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>{modelId}</TableCell>
                        <TableCell align="left">{otherSectionProps.modelName}</TableCell>
                        <TableCell align="left">{otherSectionProps.scoringData.rawScore}</TableCell>
                        <TableCell align="left">{otherSectionProps.scoringData.alignedScore}</TableCell>
                        <TableCell align="left">{otherSectionProps.bSmExclusion.toString()}</TableCell>
                    </TableRow>
                </TableHead>
                <TableRow key={modelId} sx={{ '& > *': { borderBottom: 'unset' } }}>
                    <TableCell>
                        <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={()=> handleOpen(modelId)}
                            >
                            {open && daId === modelId ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell>
                    <TableCell component="th" scope="row">

                    </TableCell>
                    <TableCell align="left"></TableCell>
                    <TableCell align="left"></TableCell>
                </TableRow>
                <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={open && (daId===modelId)} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                            Scored Characteristics
                            </Typography>

                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell align="left">baselineScore</TableCell>
                                        <TableCell align="left">binLabel</TableCell>
                                        <TableCell align="left">partialScore</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {otherSectionProps.scoringData.scoredCharacteristics?  otherSectionProps.scoringData.scoredCharacteristics.map((scoredCharacteristic) => (
                                        <TableRow key={scoredCharacteristic.characteristicName}>
                                            <TableCell component="th" >
                                            {scoredCharacteristic.characteristicName}
                                            </TableCell>
                                            <TableCell align="left"  >

                                            {scoredCharacteristic.baselineScore}

                                            </TableCell>
                                            <TableCell align="left">
                                            {scoredCharacteristic.binLabel}
                                            </TableCell>

                                            <TableCell align="left">
                                            {scoredCharacteristic.partialScore}
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



export default ScoringViewer;
