import { Layout, Menu, Breadcrumb } from 'antd';
import React, { Component } from 'react';
import './style.css';
import { Route, Switch, Link } from "react-router-dom";
import pageRoutes from '../../../config/router';

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
            
           {pageRoutes.map((data, i) => {
            return (  
              <Menu.Item key={i} icon={data.icon}>
                <Link to={data.link}>
                  {data.name}
                </Link>
              </Menu.Item>
             );
           })}
 
            {/* <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <Menu.Item key="3" icon={<FontColorsOutlined />}>
              Option 2
            </Menu.Item>
            <Menu.Item key="4" icon={<AreaChartOutlined />}>
              Option 2
            </Menu.Item>
            
            <Menu.Item key="9" icon={<AndroidOutlined />}> 
              Yusuf
            </Menu.Item> */}

          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }} />
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360, marginLeft:200, textAlign:'center'}}>
              <Switch>
                  <Route path='/' component={() => <h1>Ini Halaman Root User . . </h1>} exact />
                {pageRoutes.map((data, i) => {
                    return(
                      <Route path={data.path}
                        component={data.component}/>
                    );
                })}                 
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