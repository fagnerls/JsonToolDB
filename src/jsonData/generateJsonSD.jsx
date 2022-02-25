var outputSDJson = [];
var baseTestCase;
var updatedTestCase;
var testCaseKV = [];

export function generateJsonSD (CurrState) {
   

    baseTestCase = CurrState.jsonData.currentJson;
    testCaseKV = CurrState.testCaseData.currentJsonKV;
    updatedTestCase = null;
    CurrState.testCaseData.testCaseList.map(applyTestCase);
    console.log(outputSDJson[0]);
    return outputSDJson;
    
}

function applyTestCase(testCase) {
    const testCaseVariables = testCase.variables;
    updatedTestCase = JSON.parse(baseTestCase);    
    applyTestCaseHeader('callType', testCase.callType );
    applyTestCaseHeader('runLabel', testCase.caseName );
    applyTestCaseHeader('entityOfFocusId', testCase.focusID );


    testCaseVariables.map(applyTestCaseVariables);
}

function applyTestCaseVariables(testCaseVariable) {
    if(!(testCaseVariable.variableName === undefined ||  testCaseVariable.variableName === '' || testCaseVariable.variableName === null)){
        var pathIndex = testCaseKV.findIndex(c => c.key === testCaseVariable.variableName);
        setJsonItem(updatedTestCase, testCaseKV[pathIndex].path, testCaseVariable.variableValue );
        
        outputSDJson.push(updatedTestCase);
    }
   
} 

function applyTestCaseHeader(varName, varValue){
    if(!(varName === undefined ||  varName === '' || varName === null)){
        var pathIndex = testCaseKV.findIndex(c => c.key === varName);
        setJsonItem(updatedTestCase, testCaseKV[pathIndex].path, varValue );       

    }
}

function setJsonItem(config, path, value) {
    if (path.length === 1) {
     return  config[path[0]] = value;
    } else {
        setJsonItem(config[path[0]], path.slice(1), value);
    }
  }



