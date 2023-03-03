import { Button, Modal } from 'antd';
import { useState } from 'react';
import React from 'react';
const Delete = (props) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      //请求删除接口
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
      >
        <p>{props.alert}</p>
      </Modal>
    </>
  );
};
export default Delete;