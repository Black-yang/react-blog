import React from 'react';
import { Link } from 'react-router-dom';
import '../static/common.css';

export default class BasicPage extends React.Component{
    render(){
        return (
            <div className='box'>
                <div className='left'></div>
                <div className='right'>
                    <Link to="/index" style={{color:'#000'}}><div className='pageOne'>首页</div></Link>
                    <Link to="/article" style={{color:'#000'}}><div className='article'>文章</div></Link>
                    <Link to="/login" style={{color:'#000'}}><div className='logining'>登录</div></Link>
                </div>
            </div>
        );
    }
}