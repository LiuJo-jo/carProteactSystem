import React,{Component} from "react";
import {  Breadcrumb ,Space,Button,Input} from 'antd';
import {InputStyle} from '../../moment/InputStyle';
import TableStyle from '../../moment/TableStyle';
// import DealInfo from '../DealInfo';
import MadelStyle from '../../moment/madelStyle'

const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      fillIn:false,
    },
    {
      title: '车牌号码',
      dataIndex: 'numberplate',
      key: 'numberplate',
      fillIn:true,
      style:<Input/>,
      rules:
        {
          required: true,
        },
    },
    {
        title: '车主姓名',
        dataIndex: 'name',
        key: 'name',
        fillIn:true,
        style:<Input/>,
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
        style:<Input/>,
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
    },{
        title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      fillIn:false,
      render:(text, record, _, action)=>(
             <Space size="middle">
                 <Button type='link' style={{color:"#1677ff"}} onClick={deleteInfo(record)}>删除</Button>
                 <Button type='link' style={{color:"#1677ff"}} onClick={editInfo(record)}>编辑</Button>
             </Space>
      ),
    }
]
const deleteInfo = (e) =>{
    return ()=>{
        console.log(e.key);
    }
}

const editInfo = (e) =>{
    return ()=>{
        console.log(e.key);
    }
}


export default class CarInfo extends Component{
    addCarInfo = () =>{
        this.setState((state,props)=>({disable:true}),()=>{});
    }
    constructor(props){
        super(props);
        this.state={
            dataList:[],
            dataTitle:columns,
            page: 1,
            disable:false,
        }
    }
    setInput = (val) =>{
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
            <InputStyle lables = "请输入车牌号" setValue={this.setInput} />
            <MadelStyle columns={columns} action = 'fix'></MadelStyle>
            <div style={{margin:"0 0 30px 0"}} ></div>
            <TableStyle {...this.state}></TableStyle>
          </div> 
        </div>
    }
}