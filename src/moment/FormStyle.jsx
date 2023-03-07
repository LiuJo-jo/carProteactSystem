import { Button, Form, Input,Select,DatePicker,message } from 'antd';
import React from 'react';
import { CarInfoDeal,userInfo } from '../api/api'
//需要封装每个类型的输入框……
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} 不得为空！',
  types: {
    email: '${label} 填写格式错误!',
    number: '${label} 填写格式错误!',
  },
};
/* eslint-enable no-template-curly-in-string */

class InputStyle extends React.Component{
  constructor(props){
    super(props);
    this.state={
      values:{}
    }
  }

  onFinish = (values) => {
    //处理编辑后的数据，并传给后端values
    this.setState(()=>({values:values}));
    this.props.changeTypeTable();
    const action =this.props.action;
    var res = {};
    switch (action){
      case 'carCreate':
        res = CarInfoDeal(values,'create');
        break;
      case 'carInfoEdit':
        res = CarInfoDeal({...this.props.detail,...values},'edit');
        break;
      case 'userEdit':
        res = userInfo({...this.props.detail,...values},'edit');
        break;
    }
    try{
      res.then(data=>{
        if(data.code ==200){
          message.success(data.msg);
          if(action == "userEdit"){
            this.props.changeUserInfo({...this.props.detail,...values});
          }else{
            this.props.changeUserInfo();
          }
        }else{
          message.error(data.error)
        }})}
    catch{
      alert("没补充完毕！");
    }
  }

  getFeild= (column)=>{
    const children = [];
    children.push(column.map((element,index)=>{
        return <Form.Item   label={element.title} name = {element.key}  rules={[element.rules]} key={index}>{this.gitStyle(element)}</Form.Item>;
      }))
    return children;
  }

  gitStyle=(element)=>{
    switch (element.style){
      case "select":
        return <Select options = {element.options}  
        style={{
          width: 120,
        }}></Select>
      case "input":
        return <Input/>
      case "textarea":
        return <Input.TextArea/>
      case "date":
        return <DatePicker showTime  format="YYYY-MM-DD HH:mm:ss"/>
      case "password":
        return  <Input.Password placeholder="input password" />
      default: return null;
  }
}

  render(){
    const column = this.props.columns.filter((item)=>{
      return item.fillIn
    })
    return <Form
    {...layout}
    name="nest-messages"
    onFinish={this.onFinish}
    style={{
      width: "80%",
      height: "50%",
    }}
    initialValues={this.props.detail}
    validateMessages={validateMessages}

  >
    {
      this.getFeild(column)
    }
   
    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 8,
      }}
    >
      <Button type="primary" htmlType="submit">
        提交
      </Button>
    </Form.Item>
  </Form>
  }
}
export default InputStyle