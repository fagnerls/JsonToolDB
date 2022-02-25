import React from "react";
import {TableHead, TableRow, TableCell } from "@mui/material";




const TestCaseHeader = () => {
    
    return (        
        <TableHead>
        <TableRow>
          <TableCell />
          <TableCell>Case Name</TableCell>
          <TableCell align="center">Entity of Focus ID</TableCell>
          <TableCell align="right">Call Type</TableCell>
          <TableCell align="right"></TableCell>
         

        </TableRow>
      </TableHead>
    );
}


export default TestCaseHeader;