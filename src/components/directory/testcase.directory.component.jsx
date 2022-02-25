import React from "react";




import { TableContainer,  Table, TableBody,   Paper } from "@mui/material";
import TestCaseHeader from "../header/testCase.header.component";
import TestCaseBody from "../test-case-body/testcasebody.component";



    const Fixrows = [
      {
        caseName: "Case 1",
        FocusID: "C11111",
        callType: "REVIEW",
        history: [
          {
            Variable: "Var 1 ",
            Value: 1111
          },
          {
            Variable: "Var 2 ",
            Value: 2222
          },
          {
            Variable: "Var 3 ",
            Value: 3333
          },
          {
            Variable: "Var 4 ",
            Value: 4444
          },
          
        ],
        
      },
      {
          caseName: "Case 2",
          FocusID: "C2222",
          callType: "COLL",
          history: [
            {
              Variable: "Var 1 ",
              Value: 1111
            },
            {
              Variable: "Var 2 ",
              Value: 2222
            },
            {
              Variable: "Var 3 ",
              Value: 3333
            },
            {
              Variable: "Var 4 ",
              Value: 4444
            },
            
          ],
          
        }
    ]


const TestCaseDirectory = () => {

 
  
    return (
      
        <TableContainer component={Paper} disableAutoFocus={true}        >
        <Table aria-label="collapsible table">
            <TestCaseHeader/>
            <TableBody >
            
               
                  <TestCaseBody/>
               
            </TableBody>                     
        </Table>
      </TableContainer>
         //*colocar o header da tabela com search box botar add string campo  string valor

);}



export default TestCaseDirectory;