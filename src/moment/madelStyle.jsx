import { Button, Modal } from 'antd';
import { useState } from 'react';
import FormStyle from './FormStyle';
import React from 'react';
import { userInfo,fixInfo  } from '../api/api'
const madelStyle = (props) => {
  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState({});
  const showModal = () => {
    switch(props.action){
      case 'carInfoEdit':
        setDetail(props.records);
        break;
      case 'yuyueInfoEdit':
        setDetail((props.record));
        break;
      case 'fixInfoEdit':
        setDetail((props.record));
        break;
      case 'userSelfEdit':
        setDetail(props.detail);
        break;
      case 'userEdit':
        setDetail(props.detail);
        break;
      case 'distribution':
        //处理分配维修工逻辑
      break;
    }
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };
  return (
    <>
      <Button  style={{margin:"0 0 0 20px"}} onClick={showModal}>
        {props.label}
      </Button>
      <Modal
        title={props.label}
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
        okText="确认"
        cancelText="取消"
        footer=""
        destroyOnClose = {true}
      >
        <FormStyle changeTypeTable={hideModal} columns={props.columns} detail = {detail} action = {props.action} changeUserInfo={props.setInput}></FormStyle>
      </Modal>
    </>
  );
};
export default madelStyle;