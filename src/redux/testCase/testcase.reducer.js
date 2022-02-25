const INITIAL_STATE = {

    testCaseList :[],
    currentJsonKV:  null

}



function SDJsonParser (obj, sofar) {



    if (sofar === undefined) {
        sofar = [];
        //sofar = null;
      }

      // Leaf node, just return the path
      if (typeof(obj) !== 'object') {

        const jsonstruc = {
            key : sofar[(sofar.length -1)],
            value : obj,
            path: sofar
        }


        return [jsonstruc]
        //return [sofar];
      }

      // Interior node
      var paths = [];
      Object.keys(obj).forEach(function (k) {
        // For each child, recurse and concat

        //paths = paths.concat(SDJsonParser(obj[k], sofar= k));

        paths = paths.concat(SDJsonParser(obj[k], sofar.concat([k])));
        //paths = paths.concat(SDJsonParser(obj[k], sofar  = sofar + k + "/"));
      });

      return paths;

}

const addNewCase = (testCase) => {
    return testCase;
} ;

const testCaseReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'SET_JSON_DATA_KV':
          {
            const currentJsonObj = JSON.parse (action.payload)
            return {
                ...state,
                currentJsonKV: SDJsonParser(currentJsonObj)
            }
          }
        case 'SET_TEST_CASE':

            return {
                ...state,
                testCaseList: [...state.testCaseList, addNewCase(action.payload)]
            }

        case 'ADD_NEW_VARIABLE':
          {

            const testCaseid = state.testCaseList.findIndex(c => c.Key === action.payload.caseId)
            const  newTestCaseListVar = [...state.testCaseList];
            newTestCaseListVar[testCaseid].variables.push(action.payload);

            return {
                ...state,
                testCaseList: newTestCaseListVar


            }
          }

        case 'SET_OPEN_VALUE':
            {
                const testCase = state.testCaseList.findIndex(c => c.Key === action.payload.id);
                //const testCaseList = state.testCaseList.filter(c => c.Key !== action.payload);

               const  newTestCaseList = [...state.testCaseList];
               newTestCaseList[testCase].open =action.payload.open;

            return {
                ...state,
                testCaseList: newTestCaseList

            }
          }

        case 'SET_UPDATE_VAR_STATE':
          {
                const testCaseIndex = state.testCaseList.findIndex(c => c.Key === action.payload.caseId);
                const  newcaseList = [...state.testCaseList];
                const varIndex = newcaseList[testCaseIndex].variables.findIndex(c => c.varId === action.payload.varId);

                //const testCaseList = state.testCaseList.filter(c => c.Key !== action.payload);


                 newcaseList[testCaseIndex].variables[varIndex].update = !action.payload.update;
                return {
                    ...state,
                    testCaseList: newcaseList

                }}
        case 'SET_TEMP_VAR_NAME':
                {
                const tempVarIndexesName = action.payload.varIds.split(',');
                const testCaseTempIndexName = state.testCaseList.findIndex(c => c.Key === parseInt(tempVarIndexesName[1]));
                const varTempIndexName = state.testCaseList[testCaseTempIndexName].variables.findIndex(c => c.varId === parseInt(tempVarIndexesName[0]));
                const  newVarcaseListName = [...state.testCaseList];
               // const varTempIndexName = newVarcaseListName[testCaseTempIndexName].variables.findIndex(c => c.varId === parseInt(tempVarIndexesName[0]));
                newVarcaseListName[testCaseTempIndexName].variables[varTempIndexName].tempVarName = action.payload.varNam;

                return {
                    ...state,
                    testCaseList: newVarcaseListName
                }}

         case 'SET_TEMP_VAR_VALUE':
                {
                const tempVarIndexesValue = action.payload.varIds.split(',');
                const testCaseTempIndexValue = state.testCaseList.findIndex(c => c.Key === parseInt(tempVarIndexesValue[1]));
                const  newVarcaseListValue = [...state.testCaseList];
                const varTempIndexValue = newVarcaseListValue[testCaseTempIndexValue].variables.findIndex(c => c.varId === parseInt(tempVarIndexesValue[0]));
                newVarcaseListValue[testCaseTempIndexValue].variables[varTempIndexValue].tempVarValue = action.payload.varValue;

                return {
                    ...state,
                    testCaseList: newVarcaseListValue
                }
              }
        case 'SET_VAR_VALUE':
          {
            const testCaseIndexFinal = state.testCaseList.findIndex(c => c.Key === action.payload.caseId);
            const  newcaseListFinal = [...state.testCaseList];
            const varIndexFinal = newcaseListFinal[testCaseIndexFinal].variables.findIndex(c => c.varId === action.payload.varId);
            newcaseListFinal[testCaseIndexFinal].variables[varIndexFinal].variableName =
                    newcaseListFinal[testCaseIndexFinal].variables[varIndexFinal].tempVarName;
            newcaseListFinal[testCaseIndexFinal].variables[varIndexFinal].variableValue =
                    newcaseListFinal[testCaseIndexFinal].variables[varIndexFinal].tempVarValue;
            newcaseListFinal[testCaseIndexFinal].variables[varIndexFinal].tempVarName = null;
            newcaseListFinal[testCaseIndexFinal].variables[varIndexFinal].tempVarValue = null;
            newcaseListFinal[testCaseIndexFinal].variables[varIndexFinal].update = false;
            return {
                ...state,
                testCaseList: newcaseListFinal
            }}

        case 'REMOVE_CASE':
            return {
                ...state,
                testCaseList: state.testCaseList.filter(caseList => caseList.Key !== action.payload)
            }

            case 'REMOVE_VARIABLE':
              {
                const testCaseToRemove = state.testCaseList.findIndex(c => c.Key === action.payload.caseId);
                var newcaseListRemoveVar = [...state.testCaseList];
                const filteredTestCase = newcaseListRemoveVar[testCaseToRemove].variables.filter(variable => variable.varId !== action.payload.varId);
                newcaseListRemoveVar[testCaseToRemove].variables = filteredTestCase;
                return{
                    ...state,
                    testCaseList: newcaseListRemoveVar                }
              }

        default :
            return state;
    }
}



export default testCaseReducer;
