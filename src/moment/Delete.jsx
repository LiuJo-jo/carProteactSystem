import { Button, Modal,message } from 'antd';
import { useState } from 'react';
import React from 'react';
import { CarInfoDeal ,FixInfoDeal, YuyueInfoDeal} from '../api/api';
import { createBrowserHistory } from 'history';
const Delete = (props) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const history = createBrowserHistory();
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      //请求删除接口(需要补充其他接口)
      var res = {};
      switch(props.action){
        case 'carDelete':
          res = CarInfoDeal([props.records.id],"delete");
          break;
        case 'yuyueDelete':
          res = YuyueInfoDeal([props.records.id],"delete");
          break;
        case 'userDelete':
          res = FixInfoDeal([props.records.id],"delete");
          break;
      }
      try{
        res.then(data=>{
          if(data.code ==200){
            message.success(data.msg); 
            props.setInput();
          }else{
            message.error(data.error);
          }})
      }
      catch{alert("没补充完毕！")}
        //请求查询接口
        setConfirmLoading(false);
      }, 2000);
    
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Button style={{margin:"0 0 0 20px"}} onClick={showModal}>
        {props.label}
      </Button>
      <Modal
        title="警告"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        destroyOnClose = {true}
      >
        <p>{props.alert}</p>
      </Modal>
    </>
  );
};
export default Delete;