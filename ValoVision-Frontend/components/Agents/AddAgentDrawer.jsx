import React, { useState } from 'react';
import { Drawer, Form, Button, Select, Input } from 'antd';
import dataAgents from "@/public/data/agents";

const AddAgentDrawer = ({ isVisible, onClose, onFinishAddingAgent }) => {
  const [form] = Form.useForm();
  const [selectedImage, setSelectedImage] = useState("");

  const handleFinish = (values) => {
    onFinishAddingAgent(values); 
    form.resetFields();
    setSelectedImage(""); 
    onClose();
  };

  return (
    <Drawer
      title="Add a new agent"
      onClose={onClose}
      open={isVisible}
    >
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item
          name="agentName"
          label="Agent Name"
          rules={[{ required: true, message: "Please select an agent name!" }]}
        >
          <Select
            placeholder="Select an agent"
            onChange={(value) => {
              const selectedAgent = dataAgents.find(agent => agent.agentName === value);
              setSelectedImage(selectedAgent.agentPortraitLink);
              form.setFieldsValue({ agentPortraitLink: selectedAgent.agentPortraitLink });
            }}
          >
            {dataAgents.map((agent) => (
              <Select.Option key={agent.agentName} value={agent.agentName}>{agent.agentName}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        
        <Form.Item
          name="agentPortraitLink"
          label="Agent Portrait"
        >
          <Input disabled />
        </Form.Item>

        {selectedImage && (
          <img src={selectedImage} alt="Agent Portrait" style={{ width: "25%", margin: "20px, 0" }} />
        )}

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default AddAgentDrawer;