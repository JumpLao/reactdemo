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
import { NavBar, Icon, Flex } from 'antd-mobile';
import ContactListPage from 'containers/ContactListPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import FormPage from 'containers/FormPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
const FlexItem = Flex.Item;
export default function App() {
  return (
    <div style={{ height: '100vh' }}>
      <NavBar
        mode="dark"
        leftContent={<Link to="/" style={{ color: 'white' }}>Back</Link>}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <Icon key="1" type="ellipsis" />,
        ]}
      >Demo</NavBar>
      <Flex>
        <FlexItem>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/register" component={FormPage} />
            <Route exact path="/contact" component={ContactListPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </FlexItem>
      </Flex>
    </div>
  );
}
