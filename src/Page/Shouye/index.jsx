import React,{Component} from "react";
import {  Breadcrumb } from 'antd';
import { createBrowserHistory } from 'history';
import MadelStyle from '../../moment/madelStyle'
import '../Shouye/index.css';
const history = createBrowserHistory();

const columns = [{
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    fillIn: false,
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    style: "input",
    fillIn: true,
    disable:'true',
  },
  {
    title: '密码',
    dataIndex: 'password',
    key: 'password',
    style: "password",
    fillIn: true,
  },
 ]

export default class Shouye extends Component{
    constructor(props){
        super(props);
        this.state={
            disable: false,
            ...history.location.state
        }
    }
    render(){
        return <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360, background: "white" }}>
            <div className="infoStyle">工号：{this.state.id}</div>
            <div className="infoStyle">姓名：{this.state.name}</div>
            <div className="infoStyle">身份：{this.state.authority===1?"管理员":"维修人"}</div>
            <div className="infoStyle">账号：{this.state.username}</div>
            <MadelStyle label = {"修改信息"} columns={columns} action="user"/>
          </div>
        </div>
    }
}