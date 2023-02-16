import React,{Component} from "react";
import {  Breadcrumb } from 'antd';
// import {InputStyle} from '../../moment/InputStyle';
export default class Shouye extends Component{
    constructor(props){
        super(props);
        this.state={
            lable:'我只是想关联一下',
            // bg:this.props.bg
        }
    }
    setInput = (val) =>{
        console.log(val);
    }
    render(){
        return <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
          </Breadcrumb>
          {/* <div style={{ padding: 24, minHeight: 360, background: "white" }}>
                <InputStyle></InputStyle>
          </div> */}
        </div>
    }
}