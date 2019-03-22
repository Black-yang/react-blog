import React from 'react';
import { Link } from 'react-router-dom';
// import { Segment, Menu } from 'semantic-ui-react';

class Home extends React.Component{
    render(){
            return(
                <div>
                    <div>This is Home!</div>
                    
                        <Link to="/Page1/" style={{color:'black'}}>
                            <div>首页</div>
                        </Link>
                    
                        <Link to="/Page2/" style={{color:'black'}}>
                            <div>文章</div>
                        </Link>
                   
                        <Link to="/Page3/" style={{color:'black'}}>
                            <div>登录</div>
                        </Link>       
                </div>
            );
        }
}

export default Home;