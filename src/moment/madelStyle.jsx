import { Button, Modal } from 'antd';
import { useState } from 'react';
import FormStyle from './FormStyle';
import React from 'react';
import { carInfoDetail } from '../api/api'
const madelStyle = (props) => {
  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState({});
  const showModal = () => {
    switch(props.action){
      case 'carInfoEdit':
        setDetail(carInfoDetail(props.record));
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
      >
        <FormStyle changeTypeTable={hideModal} columns={props.columns} detail = {detail}></FormStyle>
      </Modal>
    </>
  );
};
export default madelStyle;