import React from "react";
import { Form, DatePicker, Input } from "antd";

export const TodoCreateForm = Form.create({ name: "form_in_modal" })(
  class extends React.Component {
    render() {
      const { form, handleSubmit } = this.props;
      const { getFieldDecorator } = form;

      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 }
        }
      };
      const config = {
        rules: [
          { type: "object", required: true, message: "Please select time!" }
        ]
      };

      return (
        <Form {...formItemLayout} onSubmit={handleSubmit}>
          <Form.Item label="Action">
            {getFieldDecorator("action")(<Input placeholder="Action" />)}
          </Form.Item>
          <Form.Item label="DateAdded">
            {getFieldDecorator("dateadded", config)(
              <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
            )}
          </Form.Item>
        </Form>
      );
    }
  }
);
