import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import { useState } from 'react';
import FormStyle from './FormStyle';
import React from 'react';
const madelStyle = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };
  return (
    <>
      <Button  style={{margin:"0 0 0 20px"}} onClick={showModal}>
        新增
      </Button>
      <Modal
        title="新增"
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
        okText="确认"
        cancelText="取消"
        footer=""
        
      >
        <FormStyle changeTypeTable={hideModal}></FormStyle>
      </Modal>
    </>
  );
};
export default madelStyle;