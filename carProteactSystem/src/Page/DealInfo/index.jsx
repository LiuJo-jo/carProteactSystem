import React from "react";


export default class DealInfo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            disable: this.props.disable,
            dealOperation: 'add',
        }
    }
    render(){
        return(
            this.props.disable?<div style={{position:"fixed",left:0,right:0,backgroundColor:"#000",opacity:0.4,width:"100%",height:"100%",color:"#f00",top:0,zIndex:'900',display:"flex",alignItems:"center",justifyContent:"center"}}>
                <div style={{position:"fixed",height:"60%",width:"50%",backgroundColor:"#fff",borderRadius:"10px",zIndex:'999',opacity:1}}>111</div>
                </div>:''
        )
    }
}