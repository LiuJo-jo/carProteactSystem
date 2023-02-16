import React,{Component} from "react";
export default class FixMan extends Component{
    constructor(props){
        super(props);
        this.state={
            lable:'我只是想关联一下',
            // bg:this.props.bg
        }
    }
    render(){
        return <div style={{ padding: 24, minHeight: 360 }}>111{this.state.lable}</div>
    }
}