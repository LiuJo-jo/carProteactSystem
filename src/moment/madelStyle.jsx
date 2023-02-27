import { Button, Modal } from 'antd';
import { useState } from 'react';
import FormStyle from './FormStyle';
import React from 'react';

const madelStyle = (props) => {
  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState({});
  const showModal = () => {
    this.setDetail()
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
        <FormStyle changeTypeTable={hideModal} columns={props.columns}></FormStyle>
      </Modal>
    </>
  );
};
export default madelStyle;