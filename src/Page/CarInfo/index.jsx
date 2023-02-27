import React,{Component} from "react";
import {  Breadcrumb ,Space,Button} from 'antd';
import {InputStyle} from '../../moment/InputStyle';
import TableStyle from '../../moment/TableStyle';
import MadelStyle from '../../moment/madelStyle';
import Delete from '../../moment/Delete';
import { car_info } from '../../const/columns';


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
            dataIndex: 'numberplate',
            key: 'numberplate',
            style: "input",
            fillIn: true,
            rules:
            {
              required: true,
            },
          },
          {
            title: '品牌',
            dataIndex: 'branchs',
            key: 'branchs',
            style: "select",
            fillIn: true,
            rules:
            {
              required: true,
            },
          },
          {
            title: '型号',
            dataIndex: 'types',
            key: 'types',
            style: "select",
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
            dataIndex: 'phone',
            key: 'phone',
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
              title: '创建人',
              dataIndex: 'createManeger',
              key: 'createManeger',
          },{
              title: '操作',
            dataIndex: 'operate',
            key: 'operate',
            render:(text, record, _, action)=>(
                   <Space size="middle">
                       <Delete label='删除' type='carinfo' record></Delete>
                       <MadelStyle label = {"编辑"} columns={car_info} action="carInfoEdit" record  setInput/>
                   </Space>
            ),
          }
      ]
        this.state={
            dataList:[],
            dataTitle:columns,
            page: 1,
            disable:false,
            initialValues :{},
        }
    }
    setInput = (val) =>{
      this.setState((state)=>({reserve: val}));
      console.log(val);
        //后台查询
        this.setState(state=>{
           return {dataList:[{key:'3',id:'1',numberplate:"苏A128344",branchs:"奥拓",types:"e-tron",name:"赵雅尔",phone:'17736463636',createTime:'2023-02-14 04:23:12',createManeger:'赵二'},
           {key:'2',id:'2',numberplate:"苏A121244",branchs:"大众",types:"途观L",name:"宋教仁",phone:'17736236346',createTime:'2023-02-14 04:23:12',createManeger:'赵二'}]
        }})
    }
    componentDidMount(){
        //后台初始数据请求
        this.setState(state=>{
          return {dataList:[{key:'3',id:'1',numberplate:"苏A128344",branchs:"奥拓",types:"e-tron",name:"赵雅尔",phone:'17736463636',createTime:'2023-02-14 04:23:12',createManeger:'赵二'},
          {key:'2',id:'2',numberplate:"苏A121244",branchs:"大众",types:"途观L",name:"宋教仁",phone:'17736236346',createTime:'2023-02-14 04:23:12',createManeger:'赵二'}]
       }})
    }
    chengeInput = () =>{
      this.setState((state)=>({disable: !this.state.disable}))
    }

    deleteInfo = (e) =>{
      return ()=>{
          console.log(e.key);
      }
  }

   editInfo = (e) =>{
      return ()=>{
          console.log(e.key);
      }
  }
  
    render(){
            return <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>车辆信息</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 660, background: "white" }}>   
            <InputStyle lables = "请输入车牌号" setValue={this.setInput} />
            <MadelStyle label = {"新增"} columns={this.state.dataTitle} action="carInfoAdd"   setInput/>
            <div style={{margin:"0 0 30px 0"}} ></div>
            <TableStyle {...this.state}></TableStyle>
          </div> 
        </div>
    }
}