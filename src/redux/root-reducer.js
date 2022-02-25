import { combineReducers } from "redux";
import directoryReducer from "./directory/directory.reducer";

import treeViewReducer from "./treeViwer/treeview.reducer";
import testCaseReducer from "./testCase/testcase.reducer";
import outputViewerReducer from "./output/outputviewer.reducer"



export default combineReducers({
    jsonData: treeViewReducer,
   // jsonDataKV: testCaseReducer,
    directory: directoryReducer,
    testCaseData: testCaseReducer,
    outputviewer: outputViewerReducer
});