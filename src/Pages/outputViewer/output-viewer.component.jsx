import React from "react";
import { connect } from "react-redux";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import ScoringViewer from "../outputViewer/scoring-viewer.component"
import CreditFacilitiesViewer from "../outputViewer/cf-viewer.component"
import CommonViewer from "../outputViewer/common-viewer.component"
import VariablesViewer from "../outputViewer/variable-viewer.component";



const OutputViewer = ({outputViewer}) => {

    const [decisionArea, setDecisionArea] = React.useState('');

    const handleChange = (event) => {
        setDecisionArea(event.target.value);
    }

    var decisionAreaList;


    var nullDecArea = null;
    nullDecArea = outputViewer.outputviewer.row.return.systemOutput.decisionAreaList[0].decisionAreaId;

    nullDecArea === -1 ? decisionAreaList =null : decisionAreaList = outputViewer.outputviewer.row.return.systemOutput.decisionAreaList;
    var variables = outputViewer.outputviewer.row.return.systemOutput.variableList;


return (
    <div>
    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Decision Area</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={decisionArea}
                label="Decision Area"
                onChange={handleChange}
            >
            <MenuItem value="">
            <em>None</em>
          </MenuItem>
            <MenuItem value={'Scoring'}>Scoring</MenuItem>
            <MenuItem value={'Credit Facilities'}>Credit Facilities</MenuItem>
            <MenuItem value={'Collections'}>Collections</MenuItem>
            <MenuItem value={'Communication'}>Communication</MenuItem>
            <MenuItem value={'Parcele'}>Parcele</MenuItem>
            <MenuItem value={'Total Risk'}>Total Risk</MenuItem>
            </Select>
        </FormControl>

        <br></br>
        <br></br>

        {decisionAreaList === null ? <h1> Load an Output Json Data </h1>:

        decisionArea === '' || decisionArea === 'None'? <h1> Select a Decison Area </h1>:

        decisionArea === 'Scoring'? <div><ScoringViewer decisionAreaList={decisionAreaList} decisionAreaName ={decisionArea}/>
                                          <VariablesViewer variablesList={variables}/></div>:

        decisionArea === 'Credit Facilities'? <div><CreditFacilitiesViewer decisionAreaList={decisionAreaList} decisionAreaName ={decisionArea}  />
                                                    <VariablesViewer variablesList={variables}/></div>:

        <div><CommonViewer decisionAreaList={decisionAreaList} decisionAreaName ={decisionArea}/>
              <VariablesViewer variablesList={variables}/></div>}


    </div>
)}



const mapStateToProps = (state) => ({
    outputViewer: state.outputviewer

});

export default connect(mapStateToProps) (OutputViewer);

