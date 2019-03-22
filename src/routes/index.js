import React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../component/index/index.jsx'


const Routes = () => (
  <Router>
    <div style={{width:"100%", height:"100%"}}>
      {/* <Switch> */}
        <Route path='/' component={Home}/>
        
      {/* </Switch> */}
    </div>
  </Router>
);
export default Routes;