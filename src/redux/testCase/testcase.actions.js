export const setJsonDataKV = jsonData => ({
    type: 'SET_JSON_DATA_KV',
    payload: jsonData
});

export const setTestCase = testCaseData => ({
    type: 'SET_TEST_CASE',
    payload: testCaseData
});

export const addNewVariable = newCaseVariable => ({
    type: 'ADD_NEW_VARIABLE',
    payload: newCaseVariable
});

export const setRowOpen = newOpenValue => ({
    type: 'SET_OPEN_VALUE',
    payload: newOpenValue
});

export const setUpdateVar = newUpdateValue => ({
    type: 'SET_UPDATE_VAR_STATE',
    payload: newUpdateValue
})

export const setVarValue = newVarValue => ({
    type: 'SET_VAR_VALUE',
    payload: newVarValue
})

export const setTempVarName = newVarName => ({
    type: 'SET_TEMP_VAR_NAME',
    payload: newVarName
})

export const setTempVarValue = newVarValue => ({
    type: 'SET_TEMP_VAR_VALUE',
    payload: newVarValue
})

export const cancelTempVar = variableIds => ({
    type: 'CANCEL_TEMP_VAR',
    payload: variableIds
})

export const removeCase = caseId => ({
    type: 'REMOVE_CASE',
    payload: caseId
})

export const removeVariable = varInfo => ({
    type: 'REMOVE_VARIABLE',
    payload: varInfo
})