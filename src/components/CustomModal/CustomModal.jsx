"use client";
import { Modal } from "antd";
import React, { memo } from "react";

const CustomModal = ({
  isOpen,
  handleCancel,
  handleOk,
  children,
  ...props
}) => {
  return (
    <Modal
      open={isOpen}
      closable={false}
      onCancel={handleCancel}
      footer={null}
      {...props}
    >
      {children}
    </Modal>
  );
};

export default memo(CustomModal);
