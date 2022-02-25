const INITIAL_STATE = {
    currentJson: null
};


 const treeViewReducer =  (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_JSON_DATA':
            return {
                ...state,
                currentJson: action.payload             
            }
        default:
            return state;
    }
}

export default treeViewReducer;