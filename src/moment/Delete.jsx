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
    console.log(props.record);
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
        删除
      </Button>
      <Modal
        title="警告"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>确定删除吗？</p>
      </Modal>
    </>
  );
};
export default Delete;