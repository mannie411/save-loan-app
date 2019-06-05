import React, { Component } from 'react'
import { Layout, Menu, Icon, Row,   } from 'antd';
import {  Link, Switch, Route} from 'react-router-dom'



import Nav from '../components/Nav'

import Savings from '../components/Savings'
import Loans from '../components/Loans'
import History from '../components/History'
import Settings from '../components/Settings'
  
  const { SubMenu } = Menu;
  const { Content, Sider, } = Layout;
  

  const routes = [
    {
      path: "/content/savings",
      component: Savings,
    },
    {
      path: "/content/loans",
      component: Loans,
   
    },
    {
      path: "/content/history",
      component: History,
   
    },
    {
      path: "/content/settings",
      component: Settings,
   
    },

  ];

export default class Contents extends Component {
   routeList = route => {
    return routes.map((list, key) => 
      (
        
          <Route path={list.path} component={list.component}  />
      
      )
    )

  }

  render() {
     
      
    return (
        <div  className="h-100 w-70" style={{height: '720px'}}>
          <Row type="flex" justify="end">
            <Nav />
          </Row>
      
          <Layout className="shadow-2 " style={{ padding: '24px 0', background: '#fff' }}>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                <SubMenu key="sub1" title={<span><Icon type="user" />Savings</span>}>
                  <Menu.Item key="1"><Link to="/content/savings" >Deposit</Link></Menu.Item>
                  <Menu.Item key="2">List</Menu.Item>
                
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="laptop" />Loans</span>}>
                  <Menu.Item key="3"><Link to="/content/loans">Credit</Link></Menu.Item>
                  <Menu.Item key="4">List</Menu.Item>
    
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="notification" />History</span>}>
                  <Menu.Item key="5">Savings</Menu.Item>
                  <Menu.Item key="6">Loans</Menu.Item>
      
                </SubMenu>
                <Menu.Item key="7"><Link to="/content/settings"><Icon type="setting" />Settings</Link></Menu.Item>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', }}>
            <Switch>{this.routeList(routes)}</Switch>
            </Content>
          </Layout>
        </div>
    )
  }
}
