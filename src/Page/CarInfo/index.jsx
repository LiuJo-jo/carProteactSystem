import React,{Component} from "react";
import {  Breadcrumb ,Space} from 'antd';
import {InputStyle} from '../../moment/InputStyle';
import TableStyle from '../../moment/TableStyle';
import MadelStyle from '../../moment/madelStyle';
import Delete from '../../moment/Delete';
import { car_info } from '../../const/columns';
import { carInfo } from '../../api/api';

export default class CarInfo extends Component{
    
    constructor(props){
        super(props);
        const columns = [
          {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            fillIn: false,
          },
          {
            title: '车牌号码',
            dataIndex: 'carNumber',
            key: 'carNumber',
            style: "input",
            fillIn: true,
            rules:
            {
              required: true,
            },
          },
          {
            title: '品牌',
            dataIndex: 'brand',
            key: 'brand',
            style: "input",
            fillIn: true,
            rules:
            {
              required: true,
            },
          },
          {
            title: '型号',
            dataIndex: 'type',
            key: 'type',
            style: "input",
            fillIn: true,
            rules:
            {
              required: true,
            },
          },
          {
              title: '车主姓名',
              dataIndex: 'name',
              key: 'name',
              style: "input",
              fillIn: true,
              rules:
              {
                required: true,
              },
            },
          {
            title: '联系方式',
            dataIndex: 'phonenumber',
            key: 'phonenumber',
            style: "input",
            fillIn: true,
            rules:
            {
              required: true,
            },
          },{
              title: '创建时间',
            dataIndex: 'createTime',
            key: 'createTime',
          },{
              title: '操作',
            dataIndex: 'operate',
            key: 'operate',
            render:(text, record, _, action)=>(
                   <Space size="middle">
                       <Delete label='删除' action = "carDelete" alert={"确定删除吗"} records = {record} setInput={this.setInput}></Delete>
                       <MadelStyle label = {"编辑"} columns={car_info} action="carInfoEdit" records = {record}  setInput={this.setInput}/>
                   </Space>
            ),
          }
      ]
        this.state={
            dataList:[],
            dataTitle:columns,
            pageNumber: 1,
            pageSize:10,
            disable:false,
            initialValues :{},
        }
    }
    setInput = (val="") =>{
      this.setState((state)=>({reserve: val}));
        //后台查询
        var pageSize = this.state.pageSize;
        var pageNumber = this.state.pageNumber;
        var carNumber = val;
      carInfo({pageNumber,pageSize,carNumber}).then(data=>{this.setState(state=>{
        return {dataList:data.data}})})
    }
    componentDidMount(){
        //后台初始数据请求
       carInfo({pageNumber: 1,pageSize:10}).then(data=>{this.setState(state=>{
          return {dataList:data.data}})})
    }
    chengeInput = () =>{
      this.setState((state)=>({disable: !this.state.disable}))
    }

    render(){
            return <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>车辆信息</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 660, background: "white" }}>   
            <InputStyle lables = "请输入车牌号" setValue={this.setInput} />
            <MadelStyle label = {"新增"} columns={this.state.dataTitle} action="carCreate"   setInput={this.setInput}/>
            <div style={{margin:"0 0 30px 0"}} ></div>
            <TableStyle {...this.state}  setInput={this.setInput}> </TableStyle>
          </div> 
        </div>
    }
}