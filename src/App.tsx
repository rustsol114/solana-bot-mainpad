import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {  Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import HeaderComponents from './components/Header';
import { SharedProvider } from './context/SharedContext';
// import Header from './components/Header'

const { Header, Content, Footer, Sider } = Layout;

// const items1: MenuProps['items'] = [
//   {
//     key: 0,
//     label: "Menu1"
//   }
// ]




const items2: MenuProps['items'] = [
  {
    key: 0,
    icon: <UserOutlined />,
    label: "Sniping Bot",
    children: [
      {
        key: 1,
        label: "Raydium",
        onClick: () => {
          window.location.href = '/snipingbot/raydium'
        }
      },
      {
        key: 2,
        label: "Pumpfun",
        onClick: () => {
          window.location.href = '/snipingbot/pumpfun'
        }
      },
    ],
  },
  {
    key: 3,
    icon: <UserOutlined />,
    label: "Volume Bot",

    children: [
      {
        key: 4,
        label: "Raydium",
        onClick: () => {
          window.location.href = '/volumebot/raydium'
        }
      }
    ],
  },
  {
    key: 5,
    icon: <UserOutlined />,
    label: "Copytrading Bot",

    children: [
      {
        key: 6,
        label: "Raydium",
        onClick: () => {
          window.location.href = '/copytrading/raydium'
        }
      }
    ],
  },
  {
    key: 7,
    icon: <UserOutlined />,
    label: "User Info",
    onClick: () => {
      window.location.href = '/userinfo'
    }
  },
]

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <SharedProvider>

      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
          <HeaderComponents />

          {/* <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{ flex: 1, minWidth: 0 }}
        /> */}
        </Header>
        <Content style={{ padding: '48px 30px 0px 48px ' }}>
          <Layout
            style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}
          >
            <Sider style={{ background: colorBgContainer }} width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
                items={items2}
              />
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>{
              <Outlet />
            }</Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Bot Pad - Beta ©{new Date().getFullYear()} Created by Solkeen
        </Footer>
      </Layout>

    </SharedProvider>
  );
};

export default App;