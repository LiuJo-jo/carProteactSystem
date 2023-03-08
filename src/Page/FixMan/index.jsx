import React,{Component} from "react";
import {  Breadcrumb ,Space} from 'antd';
import {InputStyle} from '../../moment/InputStyle';
import TableStyle from '../../moment/TableStyle';
import MadelStyle from '../../moment/madelStyle';
import Delete from '../../moment/Delete';
import { fix_info } from '../../const/columns';
import { fixInfo } from '../../api/api';

export default class CarInfo extends Component{
    constructor(props){
      const columns = [
        {
          title: '员工Id',
          dataIndex: 'id',
          key: 'id',
          fillIn:false,
        },
        {
          title: '姓名',
          dataIndex: 'user',
          key: 'user',
          fillIn:true,
          style:"input",
          rules:
            {
              required: true,
            },
        },
        {
            title: '用户账号',
            dataIndex: 'username',
            key: 'username',
            fillIn:true,
            style:"input",
            rules:
            {
              required: true,
            },
        },{
              title: '权限',
              dataIndex: 'authority',
              key: 'authority',
              fillIn:true,
              style:"select",
              rules:
              {
                required: true,
              },
              options:[ {
                value: '1',
                label: '超级管理员',
              },{
                value: '2',
                label: '保养员',
              },]
        },{
            title: '创建时间',
          dataIndex: 'createTime',
          key: 'createTime',
          fillIn:false,
        },{
            title: '创建人',
          dataIndex: 'createManeger',
          key: 'createManeger',
          fillIn:false,
        },
        {
          title: '备注',
          dataIndex: 'other',
          key: 'other',
          fillIn:true,
          style: 'textarea',
      },{
            title: '操作',
          dataIndex: 'operate',
          key: 'operate',
          fillIn:false,
          render:(text, record, _, action)=>(
                 <Space size="middle">
                    <Delete label='删除'  alert={"确定删除吗"} action = "userDelete"  records={record} setInput={this.setInput}></Delete>
                    <MadelStyle label = {"编辑"} columns={fix_info} action="userEdit" detail={record}   setInput={this.setInput}/>
                 </Space>
          ),
        }
    ]
        super(props);
        this.state={
            dataList:[],
            dataTitle:columns,
            page: 1,
            disable:false,
            pageNumber: 1,
            pageSize:10,
        }
    }

    setInput = (val="") =>{
        //后台查询
        this.setState((state)=>({reserve: val}));
        //后台查询
        var pageSize = this.state.pageSize;
        var pageNumber = this.state.pageNumber;
        var user = val;
        fixInfo({pageNumber,pageSize,user}).then(data=>{this.setState(state=>{
        return {dataList:data.data.data,total:data.data.total}})})
    }

    componentDidMount(){
        //后台初始数据请求
        //还要请求车辆信息、维修人员信息
          fixInfo({pageNumber: 1,pageSize:10}).then(data=>{this.setState(state=>{
            return {dataList:data.data.data,total:data.data.total}})})
    }

    pageChange =(page, pageSize)=>{
      this.setState({pageNumber:page,pageSize:pageSize},()=>{this.setInput(this.state.reserve)});
    }

    render(){
            return <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>保养人员</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 660, background: "white" }}>   
            <InputStyle lables = "请输入姓名" setValue={this.setInput} />
            <MadelStyle columns={fix_info} action = 'fixCreate' label ="新增" setInput={this.setInput}></MadelStyle>
            <div style={{margin:"0 0 30px 0"}} ></div>
            <TableStyle  {...this.state} setInput={this.setInput} pageChange={this.pageChange}></TableStyle>
          </div> 
        </div>
    }
}