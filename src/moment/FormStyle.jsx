import { Button, Form, Input, InputNumber } from 'antd';
import React from 'react';


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
  }

  onFinish = (values) => {
    //传后端values
    console.log(values);
    this.setState(()=>({...values}));
    this.props.changeTypeTable();
  }

 

  render(){
    const action = this.props.action;
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
    validateMessages={validateMessages}
  >
    {
      column.map((element,index)=>{
        console.log(element)
        return <Form.Item  label={element.title} name = {[action,element.key]}  rules={[element.rules]} key={index}>{element.style}</Form.Item>;
      })
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