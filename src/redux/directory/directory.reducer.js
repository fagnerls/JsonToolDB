const INITIAL_STATE = {
    sections: [
        { 
            id: 0,
            title: "Home",
            subtitle: "Load Json",
            imageUrl : "../../images/jsonViewer.svg",
            linkUrl: "/"
        },  
        { 
            id: 1,
            title: "Tree View",
            subtitle: "View Json Tree data",
            imageUrl : "../../images/jsonViewer.svg",
            linkUrl: "/treeview"
        },  
        { 
            id: 2,
            title: "Test Case",
            subtitle: "Create Test Case",
            imageUrl : "../images/jsonTestCase.svg",
            linkUrl: "/testcase"
        }, 
        { 
            id: 3,
            title: "Formated Output",
            subtitle: "View Formated Output Data",
            imageUrl : "../images/jsonOutput.svg",
            linkUrl: "/output"
        }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {

    return state;
}

export default directoryReducer;