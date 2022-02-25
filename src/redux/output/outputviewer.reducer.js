import OutputJsonData from "../../jsonData/outputJson.jsx"

const INITIAL_STATE = {
    outputviewer: OutputJsonData
    };



const outputViewerReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_OUTPUT_JASON':
            {const currentJsonObj = JSON.parse (action.payload);
            return {
                ...state,
                outputviewer: currentJsonObj
            }}
        default:
            return state
    }

}


export default outputViewerReducer;
