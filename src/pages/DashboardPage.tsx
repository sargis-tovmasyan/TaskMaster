import React from 'react';
import { Card, Col, Row } from 'antd';
import '../styles/Dashboard.less';

const DashboardPage: React.FC = () => {
    return (
            <Row gutter={[16, 16]}>
            <Col span={8}>
                <Card title="To Do" bordered={false} style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                <dl>
                    <dt className='task'>
                    <span role="img" aria-label="design">🎨</span> <strong>Task 1:</strong> Design the login page
                    <p>Description: Create a user-friendly login page.</p>
                    <p>Estimation: 3 points</p>
                    </dt>
                    <dt className='task'>
                    <span role="img" aria-label="database">🗄️</span> <strong>Task 2:</strong> Set up database schema
                    <p>Description: Define the database schema for user data.</p>
                    <p>Estimation: 5 points</p>
                    </dt>
                    <dt className='task'>
                    <span role="img" aria-label="research">🔍</span> <strong>Task 3:</strong> Research authentication methods
                    <p>Description: Investigate various authentication methods.</p>
                    <p>Estimation: 2 points</p>
                    </dt>
                </dl>
                </Card>
            </Col>
            <Col span={8}>
                <Card title="In Process" bordered={false} style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                <dl>
                    <dt style={{ marginBottom: '10px', padding: '10px', border: '1px solid #e8e8e8', borderRadius: '10px', backgroundColor: '#fafafa' }}>
                    <span role="img" aria-label="registration">📝</span> <strong>Task 4:</strong> Implement user registration
                    <p>Description: Develop the user registration functionality.</p>
                    <p>Estimation: 8 points</p>
                    </dt>
                    <dt style={{ marginBottom: '10px', padding: '10px', border: '1px solid #e8e8e8', borderRadius: '10px', backgroundColor: '#fafafa' }}>
                    <span role="img" aria-label="api">🔗</span> <strong>Task 5:</strong> Create API endpoints
                    <p>Description: Build the necessary API endpoints for the application.</p>
                    <p>Estimation: 5 points</p>
                    </dt>
                </dl>
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Done" bordered={false} style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                <dl>
                    <dt style={{ marginBottom: '10px', padding: '10px', border: '1px solid #e8e8e8', borderRadius: '10px', backgroundColor: '#fafafa' }}>
                    <span role="img" aria-label="dependencies">📦</span> <strong>Task 7:</strong> Install necessary dependencies
                    <p>Description: Install all required dependencies for the project.</p>
                    <p>Estimation: 1 point</p>
                    </dt>
                </dl>
                </Card>
            </Col>
            </Row>
    );
};

export default DashboardPage;