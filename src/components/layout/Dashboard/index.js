import { Layout, Menu, Breadcrumb } from 'antd';
import React, { Component } from 'react';
import './style.css';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Dashboard extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <Menu.Item key="3" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <Menu.Item key="4" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            
            <Menu.Item key="9" icon={<FileOutlined />}> 
              Yusuf
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }} />
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360, marginLeft: 200, textAlign: 'center'}}>
              Bill is a cat.
              ...
              <br />
              Really
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              long
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              
              <br />
              ...
              <br />
              ...
              <br />
              content
           </div>
          </Content>
          <Footer style={{ textAlign: 'center', marginLeft: 200 }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
};

export default Dashboard;