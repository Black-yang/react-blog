import React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../component/index/index.jsx'
import BasicPage from '../component/common'
import Article from '../component/article/article'

const Routes = () => (
  <Router>
    <div style={{width:"100%", height:"100%"}}>
      {/* <Switch> */}
        <Route path='/' component={BasicPage}/>
        <Route path='/index' component={Home} />
        <Route path='/article' component={Article} />
      {/* </Switch> */}
    </div>
  </Router>
);
export default Routes;