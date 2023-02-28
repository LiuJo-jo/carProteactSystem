import { Button, Modal } from 'antd';
import { useState } from 'react';
import FormStyle from './FormStyle';
import React from 'react';
import { carInfoDetail, yuyueInfoDetail,fixInfoDetail,userInfo,fixInfo  } from '../api/api'
const madelStyle = (props) => {
  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState({});
  const showModal = () => {
    switch(props.action){
      case 'carInfoEdit':
        setDetail(carInfoDetail(props.record));
        break;
      case 'yuyueInfoEdit':
        setDetail(yuyueInfoDetail(props.record));
        break;
      case 'fixInfoEdit':
        setDetail(fixInfoDetail(props.record));
        break;
      case 'user':
        setDetail(userInfo(props.record));
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
      >{console.log(detail)}
        <FormStyle changeTypeTable={hideModal} columns={props.columns} detail = {detail}></FormStyle>
      </Modal>
    </>
  );
};
export default madelStyle;