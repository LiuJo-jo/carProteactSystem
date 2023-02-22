import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import { useState } from 'react';
import FormStyle from './FormStyle';
import React from 'react';
const LocalizedModal = () => {
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
      >
        <FormStyle></FormStyle>
      </Modal>
    </>
  );
};
const madelStyle = () => {
  const [modal, contextHolder] = Modal.useModal();
  const confirm = () => {
    modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: 'Bla bla ...',
      okText: '确认',
      cancelText: '取消',
    });
  };
  return (
    <>
      <Space>
        <LocalizedModal />
      </Space>
      {contextHolder}
    </>
  );
};
export default madelStyle;