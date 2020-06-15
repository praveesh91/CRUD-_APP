import React from "react";
import { Modal, Button } from "antd";
import { UserCreateForm } from "../forms/userForm";
import { TodoCreateForm } from "../forms/todoForm";

export class PopupModal extends React.Component {
  render() {
    const {
      visible,
      onCancel,
      onCreate,
      addType,
      confirmLoading,
      wrappedComponentRef
    } = this.props;

    return (
      <Modal
        title={"Add New " + addType}
        visible={visible}
        confirmLoading={confirmLoading}
        onCancel={onCancel}
        onOk={onCreate}
        footer={[
          <Button key="back" onClick={onCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={confirmLoading}
            onClick={onCreate}
          >
            Save
          </Button>
        ]}
      >
        {addType === "User" ? (
          <UserCreateForm
            wrappedComponentRef={wrappedComponentRef}
            handleSubmit={onCreate}
          />
        ) : (
          <TodoCreateForm
            wrappedComponentRef={wrappedComponentRef}
            handleSubmit={onCreate}
          />
        )}
      </Modal>
    );
  }
}
