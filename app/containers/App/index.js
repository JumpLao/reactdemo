/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
const { Header, Footer, Content } = Layout;
const { Item: MenuItem } = Menu;
export default function App() {
  return (
    <div>
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <MenuItem key="1">nav 1</MenuItem>
          <MenuItem key="2">nav 2</MenuItem>
          <MenuItem key="3">nav 3</MenuItem>
        </Menu>
      </Header>
      <Content>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Content>
      <Footer></Footer>
    </div>
  );
}
