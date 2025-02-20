import React from 'react';
import { Form, Input, Button } from 'antd';

const { TextArea } = Input;

const ContactPage: React.FC = () => {
    const onFinish = (values: unknown) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <h1>Contact Us</h1>
            <Form
                name="contact"
                layout="vertical"
                onFinish={onFinish}
            >
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[{ required: true, message: 'Please enter your name' }]}
                >
                    <Input placeholder="Your Name" />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[{ required: true, message: 'Please enter your email' }, { type: 'email', message: 'Please enter a valid email' }]}
                >
                    <Input placeholder="Your Email" />
                </Form.Item>
                <Form.Item
                    name="message"
                    label="Message"
                    rules={[{ required: true, message: 'Please enter your message' }]}
                >
                    <TextArea rows={4} placeholder="Your Message" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default ContactPage;