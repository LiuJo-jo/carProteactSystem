import {  Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import React from "react";
import  DefineRoutes  from '../router/DefineRoutes'
import { useNavigate, useRoutes, Link } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;

const items = [];
DefineRoutes.forEach((item) => {
  items.push({
    label: <Link to={item.path}>{item.label}</Link>,
    key: item.path,
    icon: item.icon,})})
   
const HeaderPge = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  let element = useRoutes(DefineRoutes);

  const navigate = useNavigate();
  const onClick = (e) =>{
    navigate(e.key);
  }

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div
          style={{
            height: 32,
            margin: 16,
            fontSize:'16px',
            color:'white',
            textAlign:'center',
            lineHeight:"32px",
            borderRadius:"3px",
          }}
        >汽车养护管理系统</div>
        <Menu theme="dark" defaultSelectedKeys={['/home/shouye']} mode="inline" items={items} onClick={onClick}/>
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content style={{ margin: '0 16px' }}>
         {element}
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default HeaderPge;