import React,{Component} from "react";
import {  Breadcrumb ,Space} from 'antd';
import {InputStyle} from '../../moment/InputStyle';
import TableStyle from '../../moment/TableStyle';
import MadelStyle from '../../moment/madelStyle';
import Delete from '../../moment/Delete';
import { fix_info } from '../../const/columns';


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
          dataIndex: 'name',
          key: 'name',
          fillIn:true,
          style:"input",
          rules:
            {
              required: true,
            },
        },
        {
            title: '联系方式',
            dataIndex: 'phone',
            key: 'phone',
            fillIn:true,
            style:"input",
            rules:
            {
              required: true,
            },
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
                    <Delete label='删除'  alert={"确定删除吗"} action = "userCreate"  record={record} setInput={this.setInput}></Delete>
                    <MadelStyle label = {"编辑"} columns={fix_info} action="fixInfoEdit" record={record}   setInput={this.setInput}/>
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
            action:'add',
        }
    }
    setInput = (val="") =>{
        //后台查询
        this.setState(state=>{
           return {dataList:[{key:'3',id:'1',numberplate:"苏A128344",name:"赵雅尔",phone:'17736463636',createTime:'2023-02-14 04:23:12',createManeger:'赵二'},
           {key:'2',id:'2',numberplate:"苏A128344",name:"赵雅尔",phone:'17736463636',createTime:'2023-02-14 04:23:12',createManeger:'赵二'}]
        }})
    }
    componentDidMount(){
        //后台初始数据请求
    }
    chengeInput = () =>{
      this.setState((state)=>({disable: !this.state.disable}))
    }
    render(){
            return <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>保养人员</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 660, background: "white" }}>   
            <InputStyle lables = "请输入姓名" setValue={this.setInput} />
            <MadelStyle columns={fix_info} action = 'addFixInfo' label ="新增"></MadelStyle>
            <div style={{margin:"0 0 30px 0"}} ></div>
            <TableStyle {...this.state}></TableStyle>
          </div> 
        </div>
    }
}