import React,{Component} from "react";
import {  Breadcrumb,Button } from 'antd';
import { createBrowserHistory } from 'history';
import '../Shouye/index.css';
import DealInfo from '../DealInfo/index';
const history = createBrowserHistory();
export default class Shouye extends Component{
    constructor(props){
        super(props);
        this.state={
            disable: false,
            ...history.location.state
        }
    }
    setInput = (val) =>{
        console.log(val);
    }

    chengeInput = () => {
        this.setState(()=>({disable:!this.state.disable}));
    }
    render(){
        return <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360, background: "white" }}>
                <div className="infoStyle">姓名：{this.state.name}</div>
                <div className="infoStyle">身份：{this.state.shenfen}</div>
                <div className="infoStyle">账号：{this.state.username}</div>
                <Button type="primary" className="infoButton" onClick={this.chengeInput}> 修改信息 </Button>
                <DealInfo disable={this.state.disable} chengeInput={this.chengeInput} ></DealInfo>
          </div>
        </div>
    }
}