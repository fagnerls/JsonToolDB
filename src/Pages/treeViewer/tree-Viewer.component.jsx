import React from "react";
import "./tree-viewer.styles.scss"

import JsonViewer from "../../components/jsonViewer/json-viewer.component";

const TreeViewer = () => (
    <div >
        <div className="input-viewer-tree"><JsonViewer/></div>       
    </div>
)

export default TreeViewer;