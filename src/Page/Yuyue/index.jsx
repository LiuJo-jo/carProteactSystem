import React,{Component} from "react";
import {  Breadcrumb ,Space,Button,Input} from 'antd';
import {InputStyle} from '../../moment/InputStyle';
import TableStyle from '../../moment/TableStyle';
import MadelStyle from '../../moment/madelStyle';
import DealInfo from '../DealInfo';
import { DatePickerTime, Selects } from '../../moment/Inputs'
const { TextArea } = Input;
const branchs = [
    {
      value: '奥拓',
      label: '奥拓',
    },{
      value: '奥迪',
      label: '奥迪',
    },
  ]

  //从后端拿，现在先默认值
const fixMan =  [{
  value: '1',
  label: '张三',
},{
  value: '2',
  label: '李四',
},]

const state = 
    [{
      value: '1',
      label: '未保养',
    },{
      value: '2',
      label: '已保养',
    },]

const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      fillIn: false,
    },
    {
      title: '车牌号码',
      dataIndex: 'numberplate',
      key: 'numberplate',
      fillIn: true,
      style:<Selects items = {branchs}></Selects>,
      rules:
      {
        required: true,
      },
    },
    {
      //从后台取
        title: '品牌',
        dataIndex: 'branch',
        key: 'branch',
        fillIn: true,
        style:<Selects items = {branchs}></Selects>
      },
    {
        title: '预约人姓名',
        dataIndex: 'name',
        key: 'name',
        fillIn: true,
        style:<Input/>,
      },
    {
      title: '联系方式',
      dataIndex: 'phone',
      key: 'phone',
      fillIn: false,
      style:<Input/>,
    },
    {
        title: '保养项目',
      dataIndex: 'project',
      key: 'project',
      fillIn: true,
      style: <TextArea rows={3} maxLength={255} />,
      rules:
      {
        required: true,
      },
    },
    {
        title: '预计保养时间',
      dataIndex: 'maintainTime',
      key: 'maintainTime',
      fillIn: true,
      style:<DatePickerTime/>,
      rules:
      {
        required: true,
      },
    },
    {
        title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      fillIn: false,
    }
    ,{
        title: '创建人',
      dataIndex: 'createManeger',
      key: 'createManeger',
      fillIn: false,
    },{
        title: '分配维修工',
      dataIndex: 'fixMan',
      key: 'fixMan',
      fillIn: true,
      style:<Selects items = {fixMan}></Selects>,
      rules:
      {
        required: true,
      },
    },{
        title: '保养状态',
      dataIndex: 'maintainState',
      key: 'maintainState',
      fillIn: true,
      style:<Selects items = {state}></Selects>,
      rules:
      {
        required: true,
      },
    },{
        title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      render:(text, record, _, action)=>(
             <Space size="middle">
                <Button type='link' style={{color:"#1677ff"}} onClick={editInfo(record)}>分配维修工</Button>
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
           return {dataList:[{key:'1',id:'1',numberplate:"苏A128344",name:"赵雅尔",phone:'17736463636',createTime:'2023-02-14 04:23:12',createManeger:'赵二'},
           {key:'2',id:'2',numberplate:"苏A128344",name:"赵雅尔",phone:'17736463636',createTime:'2023-02-14 04:23:12',createManeger:'赵二'}, {key:'2',id:'2',numberplate:"苏A128344",name:"赵雅尔",phone:'17736463636',createTime:'2023-02-14 04:23:12',createManeger:'赵二'}, {key:'2',id:'2',numberplate:"苏A128344",name:"赵雅尔",phone:'17736463636',createTime:'2023-02-14 04:23:12',createManeger:'赵二'}, {key:'2',id:'2',numberplate:"苏A128344",name:"赵雅尔",phone:'17736463636',createTime:'2023-02-14 04:23:12',createManeger:'赵二'}, {key:'2',id:'2',numberplate:"苏A128344",name:"赵雅尔",phone:'17736463636',createTime:'2023-02-14 04:23:12',createManeger:'赵二'}]
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
              <Breadcrumb.Item>预约列表</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, minHeight: 660, background: "white" }}>   
            <DealInfo disable={this.state.disable} chengeInput={this.chengeInput}></DealInfo>
            <InputStyle lables = "请输入车牌号" setValue={this.setInput} />
            <MadelStyle columns={columns} action="yuyue"/>
            <div style={{margin:"0 0 30px 0"}} ></div>
            <TableStyle {...this.state}></TableStyle>
          </div> 
        </div>
    }
}