import React from 'react';
import { Space, Table, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';

const pageChange =(page, pageSize)=>{
    //待完善-页码更改数据重新加载
    console.log(page,pageSize)
}
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
    
    componentDidMount(){
        this.setState({
            dataList: this.props.dataList,
        })
    }

    render(){
        console.log(this.props)
        return <Table columns={this.state.dataTitle} dataSource={this.props.dataList}  pagination={{
            pageSize: 10,
            onChange:pageChange,
          }}
          scroll={{
            y: 240,
          }}
          bordered="true"
          ></Table>

    }
}