import React from 'react';
import {  Table } from 'antd';

export default class TableStyle extends React.Component{
    constructor(props){
        super(props);
        this.state={
            dataList: this.props.dataList,
            page:1,
            toutle:0,
            dataTitle: this.props.dataTitle
        }
    }
    pageChange = (page,pageSize)=>{
        this.props.pageChange(page,pageSize);
    }
    
    componentDidMount(){
        this.setState({
            dataList: this.props.dataList,
        })
    }

    render(){
        return <Table columns={this.state.dataTitle} dataSource={this.props.dataList}  pagination={{
            pageSize: 10,
            onChange:this.pageChange,
            total:this.props.total
          }}
         
          bordered="true"
          ></Table>

    }
}