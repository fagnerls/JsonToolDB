import React from 'react';
import { Route } from 'react-router-dom';


import HomePage from  '../Pages/homepage/homepage.component';
import TreeViewer from '../Pages/treeViewer/tree-Viewer.component';
import OutputViewer from '../Pages/outputViewer/output-viewer.component';
import TestCase from '../Pages/testCases/test-Case.component';
import Header from '../components/header/responsiveBar';






function App() {
  return (
    <div >
    <Header />
    <br></br>

      <Route exact path='/'   component={HomePage}/>
      <Route path='/treeview' component={TreeViewer}/>
      <Route path='/output' component={OutputViewer}/>
      <Route path='/testcase' component={TestCase} />

    </div>
  );
}



export default App;
