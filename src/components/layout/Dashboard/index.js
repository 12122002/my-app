import { Layout, Menu, Breadcrumb } from 'antd';
import React, { Component } from 'react';
import './style.css';
import { Switch, Route } from "react-router-dom";
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
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360, textAlign:'center'}}>
              <Switch>
                  <Route path='/'
                         component={() => <h1>Ini Halaman Root . . </h1>} exact 
                  />
                  <Route path='/About'
                         component={() => <h1>Ini Halaman About . . </h1>} exact
                  />
                  <Route path='/Contact'
                         component={() => <h1>Ini Halaman Contact . . </h1>} exact
                  />
              </Switch>
             </div>
          </Content>
          <Footer style={{ textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
};

export default Dashboard;