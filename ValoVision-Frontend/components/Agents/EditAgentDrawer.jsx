import { useEffect, useState } from 'react';
import { Drawer, Form, Button, Select, Input } from "antd";
import dataAgents from "@/public/data/agents";

const { Option } = Select;

const EditAgentDrawer = ({ isVisible, onClose, currentAgent, onFinishEditingAgent }) => {
    const [form] = Form.useForm();
    const [selectedImage, setSelectedImage] = useState(currentAgent?.agentPortraitLink);
  
    useEffect(() => {
      form.setFieldsValue({
        agentID: currentAgent?.agentID,
        agentName: currentAgent?.agentName,
        agentPortraitLink: currentAgent?.agentPortraitLink,
      });
      setSelectedImage(currentAgent?.agentPortraitLink);
    }, [currentAgent, form]);
  
    const onFinish = (values) => {
      onFinishEditingAgent(values);
    };
  
    return (
      <Drawer
        title="Edit Agent"
        onClose={onClose}
        open={isVisible}
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={currentAgent}
          onFinish={onFinish}
        >
          <Form.Item label="Agent ID">
            <span className="ant-form-text">{currentAgent?.agentID}</span>
          </Form.Item>
  
          <Form.Item
            name="agentName"
            label="Agent Name"
            rules={[{ required: true, message: "Please input the agent's name!" }]}
          >
            <Select
              placeholder="Select an agent"
              onChange={(value) => {
                const selectedAgent = dataAgents.find(agent => agent.agentName === value);
                setSelectedImage(selectedAgent.agentPortraitLink);
                form.setFieldsValue({ agentPortraitLink: selectedAgent.agentPortraitLink });
              }}
            >
              {dataAgents.map(agent => (
                <Option key={agent.agentName} value={agent.agentName}>{agent.agentName}</Option>
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
            <img src={selectedImage} alt="Selected Portrait" style={{ width: "25%", margin: "20px 0" }} />
          )}
  
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save Changes
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    );
  };
  
  export default EditAgentDrawer;
