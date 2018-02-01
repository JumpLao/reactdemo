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
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import SocialAccountListPage from 'containers/SocialAccountListPage/Loadable';
import SocialAccountDetailPage from 'containers/SocialAccountDetailPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
const { Header, Footer, Content } = Layout;
const { Item: MenuItem } = Menu;
const { Item: BreadcrumbItem } = Breadcrumb;
export default function App() {
  return (
    <Layout style={{ height: '100vh' }}>
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <MenuItem key="1">Home</MenuItem>
        </Menu>
      </Header>
      <Content style={{ padding: 20 }}>
        <Breadcrumb style={{ marginBottom: 20 }}>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          {
            //   <BreadcrumbItem>
            //   <Link to="">Application Center</Link>
            // </BreadcrumbItem>
            // <BreadcrumbItem>
            //   <Link to="">Application List</Link>
            // </BreadcrumbItem>
            // <BreadcrumbItem>An Application</BreadcrumbItem>
          }
        </Breadcrumb>
        <Switch>
          <Route exact path="/" component={SocialAccountListPage} />
          <Route exact path="/socialAccount/:id" component={SocialAccountDetailPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Content>
      <Footer>
        @Copyright Nattaphat Laoharawee
      </Footer>
    </Layout>
  );
}
