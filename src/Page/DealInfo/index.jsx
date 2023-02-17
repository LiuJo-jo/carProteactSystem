import React from "react";
import  "./styles.css";
import InputStyle from "../../moment/FormStyle"
import { Button } from "antd";
export default class DealInfo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            disable: this.props.disable,
            dealOperation: 'add',
        }
        
    }
 
    componentWillUpdate(newProps,newState){
        newState.disable = newProps.disable;
    }
        
    render(){
        const chengeInput= this.props.chengeInput;
        return(
            this.state.disable?<div className="bg" >
                <div className="windowsStyle">
                    <div className = "titleStyle"><span style={{fontSize:"18px"}}>新增车辆信息</span><Button type="text" style={{fontSize:"20px",lineHeight:"20px"}} onClick={chengeInput}>×</Button></div>
                    <InputStyle></InputStyle>
                </div>
                </div>:''
        )
    }
}