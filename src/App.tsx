import React from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import NavigationBar from './components/NavigationBar';

import Styles from './styles/App.css'
import SideBar from './components/SideBar';

const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{height: '100vh', display: 'flex', flexDirection: 'column'}}>
      <Header>
        <div className="demo-logo" />
        <NavigationBar />
      </Header>
      <div style={{ padding: '0 2%' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout style={{ padding: '24px 0', borderRadius: borderRadiusLG }}>
          <Sider >
            <SideBar />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
        </Layout>
      </div>
      <Footer style={{ textAlign: 'center', paddingTop: '100px' }}>
        Sargis Tovmasyan ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default App;
